import { getErrorMessageByPropertyName } from "@/utils/schema-validator";
import React from "react";
import { useFormContext, Controller } from "react-hook-form";

interface IInput {
  name: string;
  type?: string;
  size?: "large" | "small";
  id?: string;
  placeholder?: string;
  validation?: object;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  min?: number;
  max?: number;
  className?: string;
}

const FormInput = ({
  name,
  type,
  size = "large",
  id,
  placeholder,
  validation,
  label,
  min,
  max,
  required,
  disabled,
  className,
}: IInput) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <div className="mb-4">
     {required ? (
        <span
          style={{
            color: "red",
          }}
        >
          *
        </span>
      ) : null}
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <input
            {...field}
            id={id}
            type={type}
            className={`${
              size === "large" ? "p-3" : "p-2"
            } rounded-md border border-gray-300 focus:outline-none  focus:border-blue-500 ${className}`}
            placeholder={placeholder}
            disabled={disabled}
          />
        )}
      />
      {errorMessage && <small className="text-red-500">{errorMessage}</small>}
    </div>
  );
};

export default FormInput;