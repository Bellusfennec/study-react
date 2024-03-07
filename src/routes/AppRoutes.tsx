import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HeroItem from "../pages/Hero/HeroItem";
import HeroList from "../pages/Hero/HeroList";
import Hook from "../pages/Hook";
import Main from "../pages/Main";
import NotFound from "../pages/errors/NotFound";
import EpisodeList from "../pages/episode/EpisodeList";
import EpisodeItem from "../pages/episode/EpisodeItem";
import LocationList from "../pages/location/LocationList";
import LocationItem from "../pages/location/LocationItem";
import Auth from "../pages/Auth";
import PrivateRoute from "../components/common/PrivateRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Main />} />
        <Route path="hook" element={<Hook />} />
        <Route path="auth" element={<Auth />} />
        <Route path="hero" element={<PrivateRoute />}>
          <Route index element={<HeroList />} />
          <Route path=":heroId" element={<HeroItem />} />
          <Route path="*" element={<HeroList />} />
        </Route>
        <Route path="episode" element={<PrivateRoute />}>
          <Route index element={<EpisodeList />} />
          <Route path=":episodeId" element={<EpisodeItem />} />
          <Route path="*" element={<HeroList />} />
        </Route>
        <Route path="location" element={<PrivateRoute />}>
          <Route index element={<LocationList />} />
          <Route path=":locationId" element={<LocationItem />} />
          <Route path="*" element={<HeroList />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
