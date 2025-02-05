import React from 'react'
import scss from "./PsPlusEssPage.module.scss"
import Image from 'next/image'
import psImage from "../../../../../public/images/playstationLogo2/playstationPlus.svg"
import Left2Content from './Left2-content/Left2Content'
import Right2Content from './Right2-content/Right2Content'
import Bottom2Content from './Bottom2-content/Bottom2Content'

const PsPlusEssPage = () => {
  return (
    <section className={scss.Main}> 
        <div className="container">
            <div className={scss.content}>
                <h1>PlayStation Plus</h1>
                <h3>Выберите подходящую подписку</h3>

                <div className={scss.ps_block}>
                  <div className={scss.left_content}>
                    <Image src={psImage} alt='img' height={300} width={800}/>
                  </div>

                  <div className={scss.right_content}>
                    <div className={scss.block_content}>
                      <Left2Content/>
                      <Right2Content/>
                    </div>
                    <Bottom2Content/>
                  </div>

                </div>

            </div>
        </div>
    </section>
  )
}

export default PsPlusEssPage;