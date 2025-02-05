import React from 'react'
import scss from "./LeftContent.module.scss"
import plusGameImg from "../../../../../../public/images/ps-plus/cool_img.svg"
import Image from 'next/image'

const LeftContent = () => {
  return (
    <div className={scss.content}>
      <h2>PlayStation Plus <br /> Essential</h2>

      <div className={scss.subGame}>
        <Image src={plusGameImg} alt="" width={20} height={20} />
        <p>Игры по подписке</p>
      </div>

      <div className={scss.console}>
        <h4>Консоль</h4>

        <div className={scss.console_btn}>
          <button>PS4</button>
          <button>PS5</button>
        </div>
      </div>

      <div className={scss.level_subs}>
        <h4>Уровень подписки</h4>

        <div className={scss.levelSub_btn}>
          <button>Essential</button>
          <button>Extra</button>
          <button>Deluxe</button>
        </div>
      </div>

    </div>
  )
}

export default LeftContent;