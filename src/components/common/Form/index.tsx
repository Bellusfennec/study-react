import React, { FormHTMLAttributes } from "react";
import style from "./style.module.css";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
  className?: string;
}

const Form = (props: FormProps) => {
  const { children, className, ...rest } = props;
  return (
    <form className={style.form + (className ? ` ${className}` : "")} {...rest}>
      {children}
    </form>
  );
};

export default Form;
