import { UserSignIn } from "../../types";
import TextField from "../common/TextFiled";

const SignUp = (props: UserSignIn) => {
  const { onSubmit } = props;
  return (
    <form onSubmit={onSubmit}>
      <TextField type="text" name="Имя" />
      <TextField type="text" name="Ник" />
      <TextField type="email" name="Email" />
      <TextField type="radio" name="Пол" />
      <TextField type="password" name="Пароль" />
      <TextField type="password" name="Повторите пароль" />
      <button>Отправить</button>
    </form>
  );
};

export default SignUp;
