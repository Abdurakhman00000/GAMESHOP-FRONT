import React, { useState } from "react";
import scss from "./BurgerMenu.module.scss";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";

const BurgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`${scss.burgerMenu} ${isOpen ? scss.active : ""}`}
        onClick={toggleMenu}
      >
        <div className={scss.line1}></div>
        <div className={scss.line2}></div>
        <div className={scss.line3}></div>
      </div>
      <nav className={`${scss.navMenu} ${isOpen ? scss.active : ""}`}>
        <ul>
          <li>
            <Link href="/subscribe">01. Подписки</Link>
          </li>
          <li>
            <a href="">02. Игры</a>
          </li>
          <li>
            <a href="">03. Пополнение</a>
          </li>


          <h4>Поиск</h4>
          <div className={scss.input_div}>
              <input type="text" />
              <CiSearch />
            </div>
        </ul>

        
        
      </nav>
    </>
  );
};

export default BurgerMenu;
