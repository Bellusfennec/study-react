import { useSearchParams } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { UserSignIn } from "../../types";
import Form from "../common/Form";
import TextField from "../common/fields/TextField";
import LinkButton from "../common/buttons/LinkButton";

const initialForm = {
  email: "",
  password: ""
};

const SignIn = (props: UserSignIn) => {
  const { onSubmit } = props;
  const { formRef, handlerChange, handlerSubmit } = useForm({ initial: initialForm, onSubmit });
  const [, setParams] = useSearchParams();

  return (
    <Form ref={formRef} onSubmit={handlerSubmit} onChange={handlerChange}>
      <TextField type="email" name="email" label="Email" />
      <TextField type="password" name="password" label="Пароль" />
      <button type="submit">Войти</button>
      <LinkButton onClick={() => setParams({ page: "registration" })}>Регистрация</LinkButton>
    </Form>
  );
};

export default SignIn;
