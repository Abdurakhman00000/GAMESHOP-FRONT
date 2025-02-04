import React from 'react'
import scss from "./Header.module.scss"

const Header = () => {
  return (
    <header className={scss.Header}>
        <div className="container">
            <div className={scss.content}>
                <h1>Header Jumadil</h1>
            </div>
        </div>
    </header>
  )
}

export default Header