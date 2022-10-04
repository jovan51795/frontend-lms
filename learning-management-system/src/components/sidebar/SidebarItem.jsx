import { useState } from "react";

const SidebarItem = ({ item, showText, toggle }) => {
  const [open, setOpen] = useState(false);
  if (item.childrens) {
    return (
      <>
        <div
          className={open && showText ? "sidebar-item open" : "sidebar-item"}
        >
          <div className="sidebar-title" onClick={() => setOpen(!open)}>
            <span>
              {item.icon && <i className={item.icon}></i>}
              {showText && item.title}
            </span>
            {showText && <i className="fas fa-caret-down toggle-btn"></i>}
          </div>
          <div className="sidebar-content">
            {item.childrens.map((child, index) => (
              <SidebarItem key={index} item={child} />
            ))}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <a href={item.path || "#"} className="sidebar-item plain">
        {item.icon && <i className={item.icon}></i>}
        {item.title}
      </a>
    );
  }
};

export default SidebarItem;
