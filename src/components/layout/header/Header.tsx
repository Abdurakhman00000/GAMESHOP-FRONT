import React from "react";
import scss from "./Header.module.scss";
import Logo from "../../../../public/images/logo/Logo.svg";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <Image
            src={Logo}
            alt="Logo"
            width={700}
            height={500}
            quality={70}
            priority
          />

          <div className={scss.headers}>
            <Image
              src="/images/header_nav/Subscriptions_icon.svg"
              alt="Logo"
              width={700}
              height={500}
              quality={70}
              priority
            />
            <a>подписки</a>
          </div>

          <div className={scss.headers}>
            <Image
              src="/images/header_nav/game_icon.svg"
              alt="Logo"
              width={700}
              height={500}
              quality={70}
              priority
            />
            <a>игры</a>
          </div>
          <div className={scss.headers}>
            <Image
              src="/images/header_nav/replenishment.svg"
              alt="replenishment"
              width={700}
              height={500}
              quality={70}
              priority
            />
            <a>пополнение</a>
          </div>
          <div className={scss.input_div}>
            <input type="text" />
            <CiSearch />
          </div>
          <div className={scss.headers}>
            <Image
              src="/images/header_nav/basket.svg"
              alt="basket"
              width={700}
              height={500}
              quality={70}
              priority
            />
            <a>корзина</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
