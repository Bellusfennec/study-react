import useForm from "../../hooks/useForm";
import { UserSignIn } from "../../types";
import Form from "../common/Form";
import TextField from "../common/fields/TextField";

const initialForm = {
  email: "",
  password: ""
};

const SignIn = (props: UserSignIn) => {
  const { onSubmit } = props;
  const { formRef, handlerChange, handlerSubmit } = useForm({ initial: initialForm, onSubmit });

  return (
    <Form ref={formRef} onSubmit={handlerSubmit} onChange={handlerChange}>
      <TextField type="email" name="email" label="Email" />
      <TextField type="password" name="password" label="Пароль" />
      <button>Войти</button>
    </Form>
  );
};

export default SignIn;
