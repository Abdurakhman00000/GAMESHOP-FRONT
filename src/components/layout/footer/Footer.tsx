import React from "react";
import scss from "./Footer.module.scss";
import Image from "next/image";
import Logo from "../../../../public/images/logo/Logo.svg";

const Footer = () => {
  return (
    <footer className={scss.Footer}>
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
          <div className={scss.footer_end}>
            <p>О нас</p>
            <p>Контакты</p>
            <p>Политика конфиденциальности</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
