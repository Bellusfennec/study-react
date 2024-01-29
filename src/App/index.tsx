import DemoFetch from "../components/ui/DemoFetch";
import DemoHover from "../components/ui/DemoHover";
import DemoLocalStorage from "../components/ui/DemoLocalStorage";
import DemoViewportSize from "../components/ui/DemoViewportSize";
import DemoWindowScroll from "../components/ui/DemoWindowScroll";

function App() {
  return (
    <div style={{ padding: "1rem" }}>
      <h1>useFetch</h1>
      <DemoFetch />
      <hr />
      <h1>useLocalStorage</h1>
      <DemoLocalStorage />
      <hr />
      <h1>useHover</h1>
      <DemoHover />
      <hr />
      <h1>useViewportSize</h1>
      <DemoViewportSize />
      <hr />
      <h1>useWindowScroll</h1>
      <DemoWindowScroll />
    </div>
  );
}

export default App;
