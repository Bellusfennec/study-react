import { InputHTMLAttributes } from "react";
import { Size, RadioFiledVariant } from "../../../../types";
import { toFirstUpperCase } from "../../../../utils/string";
import style from "./style.module.css";

interface RadioFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  label?: string;
  description?: string;
  error?: string;
  required?: boolean;
  variant?: RadioFiledVariant;
  scale?: Size;
  disabled?: boolean;
  type?: "radio";
  color?: string;
  labelPosition?: "left" | "right";
}

const RadioField = (props: RadioFieldProps) => {
  const { label, description, error, required, type = "radio" } = props;
  const { scale = "md", variant = "filled", color = "blue", labelPosition = "left", ...rest } = props;

  return (
    <div className={style["size" + scale.toUpperCase()]}>
      {(label || description) && (
        <div className={style.title}>
          {label && (
            <p className={style.label}>
              {label} {required && <span className={style.required}>*</span>}
            </p>
          )}
          {description && <p className={style.description}>{description}</p>}
        </div>
      )}
      <label
        className={`${style.container} ${style["variant" + toFirstUpperCase(variant)]}`}
        style={{ color: `${color}` }}
      >
        <input type={type} className={style.input} required={required} {...rest} />
      </label>
      {error && <p className={style.error}>{error}</p>}
    </div>
  );
};

export default RadioField;
