import React from "react";
import scss from "./BottomContent.module.scss";
import logo1 from "../../../../../../public/images/playstationLogo/log1.svg"
import logo2 from "../../../../../../public/images/playstationLogo/log2.svg"
import logo3 from "../../../../../../public/images/playstationLogo/log3.svg"
import logo4 from "../../../../../../public/images/playstationLogo/log4.svg"
import logo5 from "../../../../../../public/images/playstationLogo/log5.svg"
import logo6 from "../../../../../../public/images/playstationLogo/log6.svg"
import logo7 from "../../../../../../public/images/playstationLogo/log7.svg"
import logo8 from "../../../../../../public/images/playstationLogo/log8.svg"
import Image from "next/image";

const BottomContent = () => {
  return (
    <div className={scss.content}>
      <h2>Что входит в подписку?</h2>

      <div className={scss.boxes}>
        <button> <Image src={logo1} alt="" width={17} height={17}/> Коллекция PlayStation Plus</button>
        <button> <Image src={logo2} alt="" width={17} height={17}/> Эксклюзивные материалы</button>
        <button> <Image src={logo3} alt="" width={17} height={17}/> Сетевые режимы игр</button>
        <button> <Image src={logo4} alt="" width={17} height={17}/> Share Play</button>
      </div>
      <div className={scss.boxes2}>
        <button> <Image src={logo5} alt="" width={17} height={17}/> Новые игры каждый месяц</button>
        <button> <Image src={logo6} alt="" width={17} height={17}/> Эксклюзивные скидки</button>
        <button> <Image src={logo7} alt="" width={17} height={17}/> Облачное хранилище</button>
        <button> <Image src={logo8} alt="" width={17} height={17}/> Справка по игре</button>
      </div>
    </div>
  );
};

export default BottomContent;
