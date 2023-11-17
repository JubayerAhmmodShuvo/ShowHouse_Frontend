import { useFormContext, Controller } from "react-hook-form";

type TextAreaProps = {
  name: string;
  label?: string;
  rows?: number;
  placeholder?: string;
  required?: boolean;
  className?: string;
};

const FormTextArea = ({
  name,
  label,
  rows,
  placeholder,
  required,
  className,
}: TextAreaProps) => {
  const { control } = useFormContext();

  return (
    <div className="flex flex-col w-full">
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <textarea
           
            rows={rows}
            placeholder={placeholder}
            className={`p-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 ${
              required ? "required" : ""
            } ${className}`}
            {...field}
          />
        )}
      />
    </div>
  );
};

export default FormTextArea;
