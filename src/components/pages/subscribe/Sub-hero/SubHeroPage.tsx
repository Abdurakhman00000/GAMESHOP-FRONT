import React from 'react'
import scss from "./SubHeroPage.module.scss"
import gameConsole from "../../../../../public/images/heroSub-imgs/cool_img2.svg";
import gameConsolePlus from "../../../../../public/images/heroSub-imgs/cool_img3.svg";
import Image from 'next/image';
import leftImg from "../../../../../public/images/adaptive-hero-img/adap1.svg";
import rightImg from "../../../../../public/images/adaptive-hero-img/adap2.svg";

const SubHeroPage = () => {
  return (
    <section className={scss.Main}>
      <div className={scss.background_img}></div>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.left_content}>
            <h1>PlayStation Plus</h1>
            <p>
              Подписывайтесь на PlayStation Plus и <br /> получайте доступ к
              играм по лучшим ценам!
            </p>
            <button>Подключить подписку</button>
          </div>

          <div className={scss.right_content}>
            <div className={scss.img1}>
              <Image src={gameConsole} alt="" width={750} height={300} />
            </div>
            <div className={scss.img2}>
              <Image src={gameConsolePlus} alt="" width={750} height={300} />
            </div>
          </div>
        </div>
      </div>

      <div className={scss.adaptive_imgs}>
        <Image src={leftImg} alt="" width={79} height={79} />
        <Image src={rightImg} alt="" width={79} height={79} />
      </div>

    </section>
  );
};

export default SubHeroPage;