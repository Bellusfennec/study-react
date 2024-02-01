import useForm from "../../hooks/useForm";
import { UserSignIn } from "../../types";
import Form from "../common/Form";
import RadioField from "../common/fields/RadioField";
import TextField from "../common/fields/TextField";
import FieldWrapper from "../common/wrappers/FieldWrapper";

const initialForm = {
  name: "",
  nickName: "",
  email: "",
  sex: "",
  password: "",
  passwordRepeat: ""
};

const SignUp = (props: UserSignIn) => {
  const { onSubmit } = props;
  const { formRef, handlerChange, handlerSubmit } = useForm({ initial: initialForm, onSubmit });

  return (
    <Form ref={formRef} onSubmit={handlerSubmit} onChange={handlerChange}>
      <TextField label="Имя" name="name" />
      <TextField label="Ник" name="nickName" startIcon={<p style={{ color: "grey" }}>@</p>} />
      <TextField type="email" label="Email" name="email" />
      <FieldWrapper label="Пол">
        <div style={{ display: "flex", gap: "1rem" }}>
          <RadioField type="radio" value="male" name="sex" label="Мужской" />
          <RadioField type="radio" value="female" name="sex" label="Женский" />
        </div>
      </FieldWrapper>
      <TextField type="password" label="Пароль" name="password" />
      <TextField type="password" label="Повторите пароль" name="passwordRepeat" />
      <button>Зарегестрироватся</button>
    </Form>
  );
};

export default SignUp;
