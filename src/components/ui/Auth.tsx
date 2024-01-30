import CardWrapper from "../common/wrappers/CardWrapper";
import SignIn from "./SignIn";
import SignUp from "./SugnUp";

const Auth = () => {
  const handlerSubmit = (event: any) => {
    event.preventDefault();
    console.log(event);
  };
  return (
    <>
      <CardWrapper>
        <h2>SignIn</h2>
        <SignIn onSubmit={handlerSubmit} />
        <hr />
      </CardWrapper>
      <CardWrapper>
        <h2>SignUp</h2>
        <SignUp onSubmit={handlerSubmit} />
      </CardWrapper>
    </>
  );
};

export default Auth;
