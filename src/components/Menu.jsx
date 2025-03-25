import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Menu.css";
import menuItems from "../components/menuData"; // ✅ Import menu data

const MenuItem = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <li className="menu-item">
      {item.children ? (
        <div className="menu-title" onClick={() => setOpen(!open)}>
          {item.title} <span className="arrow">{open ? "▲" : "▼"}</span>
        </div>
      ) : (
        <Link className="menu-title" to={item.to}>{item.title}</Link>
      )}

      {/* ✅ Recursively render submenus */}
      {item.children && (
        <ul className={`submenu ${open ? "open" : ""}`}>
          {item.children.map((subItem, index) => (
            <MenuItem key={index} item={subItem} />
          ))}
        </ul>
      )}
    </li>
  );
};

const Menu = () => {
  return (
    <nav className="menu">
      <ul className="menu-list">
        {menuItems.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
