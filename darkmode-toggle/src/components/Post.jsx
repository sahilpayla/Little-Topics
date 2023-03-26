import React from 'react'
import '../App.css'

const Post = ({theme}) => {
  return (
    <>
      <h4 className='heading'>My Post With {theme}</h4>
      <button className="btn">Click Me</button>
    </>
  )
}

export default Post