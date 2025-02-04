import React from 'react'
import scss from "./HowToUsePage.module.scss"

const HowToUsePage = () => {
  return (
    <section className={scss.Main}>
        <div className="container">
            <div className={scss.content}>
                <h1>Как пользоваться</h1>
            </div>
        </div>
    </section>
  )
}

export default HowToUsePage