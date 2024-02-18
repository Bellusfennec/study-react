import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import CardWrapper from "../../components/common/wrappers/CardWrapper";
import SignIn from "../../components/ui/SignIn";
import SignUp from "../../components/ui/SignUp";
import { useAuth } from "../../contexts/AuthProvider";

const Auth = () => {
  const [params] = useSearchParams();
  const page = params.get("page") === "login" || params.get("page") === "registration" ? params.get("page") : "login";
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || "/";
  const auth = useAuth();

  const handlerSubmit = (data: any) => {
    if (auth && auth?.signIn) {
      auth?.signIn(data.email || "one@email.net", () => {
        navigate(from, { replace: true });
      });
    }
  };

  return (
    <CardWrapper>
      {page === "login" && (
        <>
          <h1>SignIn</h1>
          <SignIn onSubmit={handlerSubmit} />
        </>
      )}
      {page === "registration" && (
        <>
          <h1>SignUp</h1>
          <SignUp onSubmit={handlerSubmit} />
        </>
      )}
    </CardWrapper>
  );
};

export default Auth;
