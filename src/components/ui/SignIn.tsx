import { UserSignIn } from "../../types";
import Form from "../common/Form";
import TextField from "../common/fields/TextField";

const SignIn = (props: UserSignIn) => {
  const { onSubmit } = props;

  return (
    <Form onSubmit={onSubmit}>
      <TextField type="email" name="Email" />
      <TextField type="password" name="Пароль" />
      <button>Отправить</button>
    </Form>
  );
};

export default SignIn;
