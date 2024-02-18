import { Outlet } from "react-router-dom";
import Nav from "../../components/ui/Nav";
import ContainerWrapper from "../../components/common/wrappers/ContainerWrapper";
import style from "./style.module.css";
import AuthProvider from "../../contexts/AuthProvider";

const MainLayout = () => {
  return (
    <AuthProvider>
      <ContainerWrapper className={style.container}>
        <Nav />
        <Outlet />
      </ContainerWrapper>
    </AuthProvider>
  );
};

export default MainLayout;
