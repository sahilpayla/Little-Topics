import React, { useContext } from 'react'
import '../App.css'
import { ThemeContext } from '../Context/ThemeContext.js'

const Post = () => {
  const { theme, handleOnClick } = useContext(ThemeContext)
  return (
    <>
      <h4 className='heading'>My Post With {theme}</h4>
      <button
        className="btn"
        onClick={handleOnClick}
      >
        {theme === "dark" ? "light" : "dark"}
      </button>
    </>
  )
}

export default Post