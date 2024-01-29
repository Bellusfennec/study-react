import SignIn from "./SignIn";
import SignUp from "./SugnUp";

const Auth = () => {
  const handlerSubmit = (event: any) => {
    event.preventDefault();
  };
  return (
    <>
      <h2>SignIn</h2>
      <SignIn onSubmit={handlerSubmit} />
      <hr />
      <h2>SignUp</h2>
      <SignUp onSubmit={handlerSubmit} />
    </>
  );
};

export default Auth;
