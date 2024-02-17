import { Outlet } from "react-router-dom";
import Nav from "../../components/ui/Nav";
import ContainerWrapper from "../../components/common/wrappers/ContainerWrapper";
import style from "./style.module.css";

const MainLayout = () => {
  return (
    <ContainerWrapper className={style.container}>
      <Nav />
      <Outlet />
    </ContainerWrapper>
  );
};

export default MainLayout;
