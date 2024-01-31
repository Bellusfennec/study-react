import CardWrapper from "../common/wrappers/CardWrapper";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Auth = () => {
  const handlerSubmit = (data: any) => {
    console.log("Auth handlerSubmit", data);
  };
  return (
    <>
      <CardWrapper>
        <h2>SignIn</h2>
        <SignIn onSubmit={handlerSubmit} />
      </CardWrapper>
      <CardWrapper>
        <h2>SignUp</h2>
        <SignUp onSubmit={handlerSubmit} />
      </CardWrapper>
    </>
  );
};

export default Auth;
