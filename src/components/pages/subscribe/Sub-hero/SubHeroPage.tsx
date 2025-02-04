import React from 'react'
import scss from "./SubHeroPage.module.scss"

const SubHeroPage = () => {
  return (
    <section className={scss.Main}>
        <div className="container">
            <div className={scss.content}>
                <h2>Hero page</h2>
            </div>
        </div>
    </section>
  )
}

export default SubHeroPage