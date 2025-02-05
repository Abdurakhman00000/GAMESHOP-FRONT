import React from 'react'
import scss from "./PsPlusPage.module.scss"
import Image from 'next/image'
import psImage from "../../../../../public/images/ps-plus/cool_img.svg"
import LeftContent from './Left-content/LeftContent'
import RightContent from './Right-content/RightContent'
import BottomContent from './Bottom-content/BottomContent'

const PsPlusPage = () => {
  return (
    <section className={scss.Main}>
        <div className="container">
            <div className={scss.content}>
                <h1>PlayStation Plus</h1>
                <h3>Выберите подходящую подписку</h3>

                <div className={scss.ps_block}>
                  <div className={scss.left_content}>
                    <Image src={psImage} alt='img' height={300} width={800}/>
                    <p>Essential</p>
                  </div>

                  <div className={scss.right_content}>
                    <div className={scss.block_content}>
                      <LeftContent/>
                      <RightContent/>
                    </div>
                    <BottomContent/>
                  </div>

                </div>

            </div>
        </div>
    </section>
  )
}

export default PsPlusPage