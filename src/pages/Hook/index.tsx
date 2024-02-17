import CardWrapper from "../../components/common/wrappers/CardWrapper";
import DemoFetch from "../../components/ui/DemoFetch";
import DemoHover from "../../components/ui/DemoHover";
import DemoLocalStorage from "../../components/ui/DemoLocalStorage";
import DemoToggle from "../../components/ui/DemoToggle";
import DemoToggleSecond from "../../components/ui/DemoToggleSecond";
import DemoViewportSize from "../../components/ui/DemoViewportSize";
import DemoWindowScroll from "../../components/ui/DemoWindowScroll";
import style from "./style.module.css";

const Hook = () => {
  return (
    <div className={style.container}>
      <CardWrapper>
        <h1>useFetch</h1>
        <DemoFetch />
      </CardWrapper>
      <CardWrapper>
        <h1>useLocalStorage</h1>
        <DemoLocalStorage />
      </CardWrapper>
      <CardWrapper>
        <h1>useHover</h1>
        <DemoHover />
      </CardWrapper>
      <CardWrapper>
        <h1>useViewportSize</h1>
        <DemoViewportSize />
      </CardWrapper>
      <CardWrapper>
        <h1>useWindowScroll</h1>
        <DemoWindowScroll />
      </CardWrapper>
      <CardWrapper>
        <h1>useToggle</h1>
        <DemoToggle />
      </CardWrapper>
      <CardWrapper>
        <h1>useToggle 2</h1>
        <DemoToggleSecond />
      </CardWrapper>
    </div>
  );
};

export default Hook;
