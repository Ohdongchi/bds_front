import { Link } from "react-router-dom";
import { useCallback, useState } from "react";
import { subMenu } from "../../types/ThemeData";

import "./header.scss";
import { Menu } from "./sub/SubMenu";

const Header = () => {
    const [active, setActive] = useState<Boolean>(false);
    const [subMenuIndex,setSubMenuIndex] = useState(1);
    const onClickMenuIndex = (index:number) => {
        setSubMenuIndex(index);
    }
    const onClickLabel = (idx: any) => {

    }

    return <header className="header">
        <div className="header_box">
            <h1>배차시스템</h1>
            <Menu/>
        </div>
    </header>;
}

export default Header;