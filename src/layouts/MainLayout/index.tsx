import { Outlet } from "react-router-dom";
import ContainerWrapper from "../../components/common/wrappers/ContainerWrapper";
import AuthProvider from "../../contexts/AuthProvider";
import ErrorBoundary from "../../middleware/ErrorBoundary";
import { Suspense, lazy } from "react";
import style from "./style.module.css";

const Nav = lazy(() => import("../../components/ui/Nav").then((module) => ({ default: module.Nav })));

const MainLayout = () => {
  return (
    <AuthProvider>
      <ContainerWrapper className={style.container}>
        <Suspense fallback={<h1>Загрузка...</h1>}>
          <Nav />
        </Suspense>
        <ErrorBoundary>
          <Suspense fallback={<h1>Загрузка...</h1>}>
            <Outlet />
          </Suspense>
        </ErrorBoundary>
      </ContainerWrapper>
    </AuthProvider>
  );
};

export default MainLayout;
