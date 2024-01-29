import useHover from "../../hooks/useHover";

const DemoHover = () => {
  const { hovered, ref } = useHover();

  return <div ref={ref}>{hovered ? "На меня навели мышку" : "Наведи мышкой на меня"}</div>;
};

export default DemoHover;
