import React from "react";
import scss from "./Bottom2Content.module.scss";

const Bottom2Content = () => {
  return (
    <div className={scss.content}>
      <h2>Преимущества EA Play</h2>

      <div className={scss.boxes}>
        <div className={scss.box}>
          <h4>Больше игр</h4>
          <p>
            В коллекцию The Play <br /> List входят более 50 игр <br /> из ваших любимых <br />
            франшиз вроде Need for <br /> Speed, Madden и <br /> Battlefield.
          </p>
        </div>

        <div className={scss.box}>
          <h4>Пробные <br /> версии игр</h4>
          <p>
          Играйте в <br /> избранные <br /> новинки от EA в <br /> течение 10 часов.
          </p>
        </div>

        <div className={scss.box}>
          <h4>Больше наград</h4>
          <p>
          Подписчики получают <br /> эксклюзивные награды, <br /> которые расширят <br /> границы игры и <br /> помогут выделиться.
          </p>
        </div>

        <div className={scss.box}>
          <h4>Экономьте</h4>
          <p>
          Получите скидку 10% <br /> на цифровые <br /> материалы EA, включая <br /> игры, внутри игровую <br /> валюту и многое <br /> другое.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bottom2Content;
