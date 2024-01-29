import useToggle from "../../hooks/useToggle";

const DemoToggleSecond = () => {
  const [value, toggle] = useToggle(["light", "dark"]);

  return (
    <>
      <button onClick={() => toggle()}>{value}</button>
      <br />
      <button onClick={() => toggle("dark")}>Set dark</button>
    </>
  );
};

export default DemoToggleSecond;
