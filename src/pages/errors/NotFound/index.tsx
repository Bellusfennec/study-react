import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>Ошибка</h1>
      <Link to="/">На главную</Link>
    </div>
  );
};

export default NotFound;
