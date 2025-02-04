import React from 'react'
import scss from "./SubHeroPage.module.scss"
import gameConsole from "../../../../../public/images/heroSub-imgs/game-console.png";
import gameConsolePlus from "../../../../../public/images/heroSub-imgs/game-console-plus.png";
import Image from 'next/image';

const SubHeroPage = () => {
  return (
    <section className={scss.Main}>
      <div className={scss.background_img}></div>
        <div className="container">
            <div className={scss.content}>
                
                <div className={scss.left_content}>
                  <h1>PlayStation Plus</h1>
                  <p>Подписывайтесь на PlayStation Plus и <br /> получайте доступ к играм по лучшим ценам!</p>
                  <button>Подключить подписку</button>
                </div>

                <div className={scss.right_content}>
                  <div className={scss.img1}>
                    <Image src={gameConsole} alt='' width={750} height={300}/>
                  </div>
                  <div className={scss.img2}>
                  <Image src={gameConsolePlus} alt='' width={750} height={300}/>
                  </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default SubHeroPage;