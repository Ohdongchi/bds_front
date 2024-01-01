import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { subMenuProps, subMenuTypes } from "../../../types/DataTypes";

import "./menu.scss";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";

export const Menu = ({ mainMenus, subMenus }: subMenuProps) => {
  const [sub, setSub] = useState([]);
  const [subMenuIndex, setSubMenuIndex] = useState<number>(0);

  useEffect(() => {
    setSub(
      subMenus.filter((e: subMenuTypes) => e.key === subMenuIndex)[0].list
    );
  }, [subMenuIndex, subMenus]);

  const onClicks: any = useCallback((idx: number) => {
    setSubMenuIndex(idx);
  }, []);

  return (
    <div className="menu_box">
      <ul className="main_menu">
        {mainMenus.map((name: any, idx: number) => {
          return (
            <li
              key={nanoid()}
              onClick={() => onClicks(idx)}
              className={`main_items ${subMenuIndex === idx ? "active" : ""}`}
            >
              <label>{name}</label>
            </li>
          );
        })}
        <li className="main_items" key={nanoid()}>
          <label>로그아웃</label>
        </li>
      </ul>
      <ul className="sub_menu">
        {sub.map((s: string, index: number) => {
          return (
            <li className="sub_items" key={nanoid()}>
              <Link to="">{s}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
