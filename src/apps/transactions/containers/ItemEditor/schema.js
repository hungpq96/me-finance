import { object, string, number } from "yup";

export default object().shape({
  name: string().required(),
  price: number().required(),
  note: string(),
});
