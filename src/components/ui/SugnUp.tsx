import { UserSignIn } from "../../types";
import Form from "../common/Form";
import TextField from "../common/fields/TextField";

const SignUp = (props: UserSignIn) => {
  const { onSubmit } = props;

  return (
    <Form onSubmit={onSubmit}>
      <TextField
        type="text"
        label="Имя"
        scale="xs"
        variant="unstyled"
        error="Ошибка поля"
        required
        description="Описание описаниев"
      />
      <TextField
        type="text"
        label="Ник"
        scale="sm"
        variant="default"
        error="Ошибка поля"
        required
        description="Описание описаниев"
        disabled
      />
      <TextField
        type="email"
        label="Email"
        scale="md"
        variant="filled"
        error="Ошибка поля"
        required
        description="Описание описаниев"
        disabled
      />
      <input type="radio" />
      <TextField
        type="password"
        label="Пароль"
        scale="lg"
        error="Ошибка поля"
        required
        description="описание описаниев"
      />
      <TextField
        type="password"
        label="Повторите пароль"
        scale="xl"
        error="Ошибка поля"
        required
        description="описание описаниев"
      />
      <button>Отправить</button>
    </Form>
  );
};

export default SignUp;
