import { UserSignIn } from "../../types";
import TextField from "../common/TextFiled";

const SignIn = (props: UserSignIn) => {
  const { onSubmit } = props;
  return (
    <form onSubmit={onSubmit}>
      <TextField type="email" name="Email" />
      <TextField type="password" name="Пароль" />
      <button>Отправить</button>
    </form>
  );
};

export default SignIn;
