"use client";
import React from "react";
import scss from "./Header.module.scss";
import Logo from "../../../../public/images/logo/Logo.svg";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <Link href="/">
            <Image
              src={Logo}
              alt="Logo"
              width={700}
              height={500}
              quality={70}
              priority
              className={scss.navIcon}
            />
          </Link>

          <Link href="/subscribe">
            <div
              className={`${scss.headers} ${
                pathname === "/subscribe" ? scss.active : ""
              }`}
            >
              <Image
                src="/images/header_nav/Subscriptions_icon.svg"
                alt="Logo"
                width={700}
                height={500}
                quality={70}
                priority
                className={scss.navIcon}
              />
              <a>подписки</a>
            </div>
          </Link>

          <Link href="/games">
            <div
              className={`${scss.headers} ${
                pathname === "/games" ? scss.active : ""
              }`}
            >
              <Image
                src="/images/header_nav/game_icon.svg"
                alt="Logo"
                width={700}
                height={500}
                quality={70}
                priority
                className={scss.navIcon}
              />
              <a>игры</a>
            </div>
          </Link>

          <Link href="/replenishment">
            <div
              className={`${scss.headers} ${
                pathname === "/replenishment" ? scss.active : ""
              }`}
            >
              <Image
                src="/images/header_nav/replenishment.svg"
                alt="replenishment"
                width={700}
                height={500}
                quality={70}
                priority
                className={scss.navIcon}
              />
              <a>пополнение</a>
            </div>
          </Link>

          <div className={scss.input_div}>
            <input type="text" />
            <CiSearch />
          </div>

          <Link href="/basket">
            <div
              className={`${scss.headers} ${
                pathname === "/basket" ? scss.active : ""
              }`}
            >
              <Image
                src="/images/header_nav/basket.svg"
                alt="basket"
                width={700}
                height={500}
                quality={70}
                priority
                className={scss.navIcon}
              />
              <a>корзина</a>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
