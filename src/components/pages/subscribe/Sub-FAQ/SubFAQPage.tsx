import React from "react";
import scss from "./SubFAQPage.module.scss";

const SubFAQPage = () => {
  return (
    <section className={scss.main}>
      <div className="container">
        <h2 className={scss.title}>Часто задаваемые вопросы</h2>
        <div className={scss.faqGrid}>
          <div className={scss.faqItem}>
            <span>Как подключается подписка?</span>
            <button className={scss.plusBtn}>+</button>
          </div>

          <div className={scss.faqItem}>
            <span>Как подключается подписка?</span>
            <button className={scss.plusBtn}>+</button>
          </div>

          <div className={scss.faqItem}>
            <span>Как подключается подписка?</span>
            <button className={scss.plusBtn}>+</button>
          </div>

          <div className={scss.faqItem}>
            <span>
              Как подключается подписка? Lorem ipsum dolor sit amet, consectetur
            </span>
            <button className={scss.plusBtn}>+</button>
          </div>

          <div className={scss.faqItem}>
            <span>Как подключается подписка?</span>
            <button className={scss.plusBtn}>+</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubFAQPage;
