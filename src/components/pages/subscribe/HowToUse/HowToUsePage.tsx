import React from "react";
import scss from "./HowToUsePage.module.scss";
import { HiArrowLongRight } from "react-icons/hi2";
import Image from "next/image";

const HowToUsePage = () => {
  return (
    <section className={scss.Main}>
      <div className="container">
        <div className={scss.content}>
          <h1>Как пользоваться?</h1>
          <div className={scss.how_to_use}>
            <div className={scss.Doll_div}>
              <Image
                className={scss.Doll}
                src="/images/howToUse/doll_image.png"
                alt="doll"
                width={700}
                height={500}
                quality={70}
                priority
              />
            </div>
            <div className={scss.card_1}>
              <h3>
                Вы получаете <br /> логин и пароль от <br /> игрового аккаунта.
              </h3>
              <div className={scss.number}>
                <h1>1</h1>
                <Image
                  src="/images/howToUse/Arrow_2.svg"
                  alt="img"
                  width={30}
                  height={20}
                  priority
                />
              </div>
            </div>
            <div className={scss.card_2}>
              <h3>
                Добавляете его на консоль, включаете <br /> активацию аккаунта
                <br /> в настройках по <br /> инструкции.
              </h3>
              <div className={scss.number}>
                <h1>2</h1>
                <Image
                  src="/images/howToUse/Arrow_2.svg"
                  alt="img"
                  width={30}
                  height={20}
                  priority
                />
              </div>
            </div>
            <div className={scss.card_3}>
              <h3>
                После активации аккаунта подписка начинает работать на всех
                аккаунтах вашей консоли!
              </h3>
              <div className={scss.number}>
                <h1>3</h1>
                <Image
                  src="/images/howToUse/Arrow_2.svg"
                  alt="img"
                  width={30}
                  height={20}
                  priority
                />
              </div>
            </div>

            <Image
              className={scss.Sony}
              src="/images/howToUse/sony.png"
              alt="doll"
              width={700}
              height={500}
              quality={70}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToUsePage;
