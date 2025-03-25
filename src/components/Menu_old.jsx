import menuItems from "./menuData";


import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Menu.css"; // ✅ Ensure your CSS is imported

// ✅ Define menu structure
const menuData = [
  { title: "Home", to: "/" },

  { 
    title: "Teaching", 
    children: [
      { title: "CS Classes", to: "/code" },
      { title: "Language Arts", to: "/experiment" },
      { title: "Resources", to: "/code" } // ❌ Consider using a unique path
    ]
  },

  { 
    title: "Sketches", 
    children: [
      { title: "Hearts", to: "/hearts" },
      { title: "Circle-Pack", to: "/circle-pack" }, // ✅ Fixed duplicate entry
      { title: "Experiment", to: "/experiment" }
      
    ]
  },

  { 
    title: "DataViz", 
    children: [
      { title: "Team", to: "/about/team" },
      { title: "Careers", to: "/about/careers" }
    ]
  },

  { 
    title: "Data Structures", 
    children: [
      { title: "Sets", to: "/data/sets" }, 
      { title: "Maps", to: "/data/maps" }, 
      { title: "Stacks", to: "/data/stacks" }, 
      { title: "Queues", to: "/data/queues" }, 
      { title: "Linked Lists", to: "/data/linkedlists" }, 
      { title: "Heaps", to: "/data/heaps" }, 
      { title: "Trees", to: "/data/trees" }, 
      { title: "Graphs", to: "/data/graphs" } 
    ]
  },

  { title: "Contact", to: "/contact" }
];

// ✅ MenuItem component for handling dropdown logic
const MenuItem = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <li className="menu-item">
      {/* If item has children, enable dropdown behavior */}
      {item.children ? (
        <div className="menu-title" onClick={() => setOpen(!open)}>
          {item.title} <span className="arrow">{open ? "▲" : "▼"}</span>
        </div>
      ) : (
        // Regular navigation link
        <Link className="menu-title" to={item.to}>{item.title}</Link>
      )}

      {/* Dropdown submenu for children */}
      {item.children && open && (
        <ul className="submenu">
          {item.children.map((subItem, index) => (
            <li key={index} className="submenu-item">
              <Link to={subItem.to}>{subItem.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

// ✅ Main Menu component
export default function Menu() {
  return (
    <nav className="menu">
      <ul className="menu-list">
        {menuData.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </ul>
    </nav>
  );
}
