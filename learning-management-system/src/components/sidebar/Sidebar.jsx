import React, { useState } from "react";
import SidebarItem from "./SidebarItem";
import items from "./SidebarData";

const Sidebar = () => {
  const [showText, setShowText] = useState(true);
  const toggle = () => setShowText(!showText);

  return (
    <>
      <div
        style={{ width: showText ? "300px" : "60px" }}
        className="sidebar"
        id="sidebar"
      >
        <div className="sidebar-inner slimscroll">
          <div className="sidebar-top">
            <img
              src="/assets/img/logo.png"
              alt="Logo"
              className="sidebar-logo"
              style={{ display: showText ? "block" : "none" }}
            />
            <span
              className="sidebar-bar"
              style={{ marginLeft: showText ? "120px" : "10px" }}
            >
              <i
                className="fas fa-align-left"
                onClick={toggle}
                id="toggle_btn"
              ></i>
            </span>
          </div>
          {items.map((item, index) => (
            <SidebarItem key={index} item={item} showText={showText} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
