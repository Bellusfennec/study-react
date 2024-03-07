import CardWrapper from "../../components/common/wrappers/CardWrapper";
import SignIn from "../../components/ui/SignIn";
import SignUp from "../../components/ui/SignUp";
import style from "./style.module.css";

const Auth = () => {
  const handlerSubmit = (data: any) => {
    console.log("Auth handlerSubmit", data);
  };
  return (
    <div className={style.container}>
      <h1>Auth</h1>
      <CardWrapper>
        <h2>SignIn</h2>
        <SignIn onSubmit={handlerSubmit} />
      </CardWrapper>
      <CardWrapper>
        <h2>SignUp</h2>
        <SignUp onSubmit={handlerSubmit} />
      </CardWrapper>
    </div>
  );
};

export default Auth;
