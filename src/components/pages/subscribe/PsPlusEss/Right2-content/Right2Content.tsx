import React from "react";
import scss from "./Right2Content.module.scss";

const Right2Content = () => {
  return (
    <div className={scss.content}>
      <h2>Длительность подписки</h2>

      <div className={scss.choices}>
        <div className={scss.choice} tabIndex={0}>
          <div className={scss.boxes}>
            <div className={scss.box}>
              <p>1</p>
            </div>
            <p>1 месяц</p>
          </div>
          <h6>740Р</h6>
        </div>

        <div className={scss.choice} tabIndex={0}>
          <div className={scss.boxes}>
            <div className={scss.box}>
              <p>2</p>
            </div>
            <p>3 месяц</p>
          </div>
          <h6>1690Р</h6>
        </div>
        <button>Купить</button>
      </div>
    </div>
  );
};

export default Right2Content;
