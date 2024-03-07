import useViewportSize from "../../hooks/useViewportSize";

const DemoViewportSize = () => {
  const { height, width } = useViewportSize();

  return (
    <>
      Width: {width}, height: {height}
    </>
  );
};

export default DemoViewportSize;
