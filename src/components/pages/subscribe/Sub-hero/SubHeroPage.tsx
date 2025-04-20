"use client";

import { memo, useRef } from "react";
import Image from "next/image";
import scss from "./SubHeroPage.module.scss";
import gameConsole from "../../../../../public/images/heroSub-imgs/cool_img2.svg";
import gameConsolePlus from "../../../../../public/images/heroSub-imgs/cool_img3.svg";
import leftImg from "../../../../../public/images/adaptive-hero-img/adap1.svg";
import rightImg from "../../../../../public/images/adaptive-hero-img/adap2.svg";
import PsPlusPage from "../PsPlus/PsPlusPage";

const SubHeroPage = () => {
  const psPlusRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (psPlusRef.current) {
      psPlusRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <section className={scss.Main}>
        <div className={scss.background_img} />

        <div className="container">
          <div className={scss.content}>
            <div className={scss.left_content}>
              <h1>PlayStation Plus</h1>
              <p>
                Подписывайтесь на PlayStation Plus и <br /> получайте доступ к
                играм по лучшим ценам!
              </p>
              <button onClick={handleScroll}>Подключить подписку</button>
            </div>

            <div className={scss.right_content}>
              <div className={scss.img1}>
                <Image
                  src={gameConsole}
                  alt="PlayStation gaming console"
                  width={750}
                  height={300}
                  quality={70}
                  priority={true}
                  sizes="(max-width: 1007px) 100vw, 700px"
                />
              </div>
              <div className={scss.img2}>
                <Image
                  src={gameConsolePlus}
                  alt="PlayStation Plus features"
                  width={750}
                  height={300}
                  quality={70}
                  loading="lazy"
                  sizes="(max-width: 1007px) 100vw, 350px"
                />
              </div>
            </div>
          </div>
        </div>

        <div className={scss.adaptive_imgs}>
          <Image
            src={leftImg}
            alt="PlayStation adaptive left"
            width={79}
            height={79}
            loading="lazy"
            quality={70}
          />
          <Image
            src={rightImg}
            alt="PlayStation adaptive right"
            width={79}
            height={79}
            loading="lazy"
            quality={70}
          />
        </div>
      </section>

      <div ref={psPlusRef}>
        <PsPlusPage />
      </div>
    </>
  );
};

export default memo(SubHeroPage);
