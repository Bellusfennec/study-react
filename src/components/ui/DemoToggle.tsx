import useToggle from "../../hooks/useToggle";

const DemoToggle = () => {
  const [value, toggle] = useToggle(["blue", "orange", "cyan", "teal"]);

  return <button onClick={() => toggle()}>{value}</button>;
};

export default DemoToggle;
