import css from "./ErrorMessage.module.css";
const ErrorMessage = () => {
  return <p className={css.message}>Error fetching images</p>;
};

export default ErrorMessage;
