
import * as yup from "yup";

export const taskSchema = yup.object().shape({
  taskName: yup.string().required("Task Name is required"),
  description: yup.string().required("Task Description is required"),
});
