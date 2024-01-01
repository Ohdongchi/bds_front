import { useState } from "react";
import { mainMenu, subMenu } from "../../types/ThemeData";
import { Menu } from "./menu/Menu";

import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header_box">
        <h1>배차시스템</h1>
        <Menu mainMenus={mainMenu} subMenus={subMenu} />
      </div>
    </header>
  );
};

export default Header;
