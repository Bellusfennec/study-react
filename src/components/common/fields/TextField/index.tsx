import { InputHTMLAttributes } from "react";
import style from "./style.module.css";
import { toFirstUpperCase } from "../../../../utils/string";
import { Size, Variant } from "../../../../types";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  label?: string;
  name?: string;
  value?: string;
  description?: string;
  error?: string;
  required?: boolean;
  variant?: Variant;
  scale?: Size;
  radius?: Size;
  disabled?: boolean;
}

const TextField = (props: TextFieldProps) => {
  const { placeholder, label, description, error, required, ...rest } = props;
  const { scale = "md", radius = "md", variant = "default" } = props;

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
      <div
        className={`${style.container} ${style["radius" + radius.toUpperCase()]} ${
          style["variant" + toFirstUpperCase(variant)]
        }`}
      >
        <div>icon</div>
        <input className={style.input} required={required} {...rest} />
      </div>
      {error && <p className={style.error}>{error}</p>}
    </div>
  );
};

export default TextField;
