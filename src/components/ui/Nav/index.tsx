import { Link, NavLink } from "react-router-dom";
import "./style.css";

const Nav = () => {
  const menu = [
    { id: 1, name: "Хуки", link: "/hook" },
    { id: 2, name: "Форм", link: "/form" },
    { id: 3, name: "Герои", link: "/hero" },
    { id: 4, name: "Эпизоды", link: "/episode" },
    { id: 5, name: "Локации", link: "/location" }
  ];
  return (
    <nav className="nav__container">
      <Link to="/" className="nav__logo">
        Главная
      </Link>
      <div className="nav__menu">
        {menu.map((item) => (
          <NavLink key={item.id} to={item.link} className="nav__menu-link">
            {item.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
