import React from 'react'
import scss from "./Search.module.scss"

const Search = () => {
  return (
    <div className={scss.Search}>
        <input type="text" placeholder='Поиск...'/>
    </div>
  )
}

export default Search