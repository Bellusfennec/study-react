import DemoFetch from "../components/ui/DemoFetch";
import DemoHover from "../components/ui/DemoHover";
import DemoLocalStorage from "../components/ui/DemoLocalStorage";

function App() {
  return (
    <div style={{ padding: "1rem" }}>
      <h1>useFetch</h1>
      <DemoFetch />
      <hr />
      <h1>useLocalStorage</h1>
      <DemoLocalStorage />
      <hr />
      <h1>useLocalStorage</h1>
      <DemoHover />
    </div>
  );
}

export default App;
