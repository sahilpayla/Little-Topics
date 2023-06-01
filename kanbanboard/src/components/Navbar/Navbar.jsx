import React from 'react'
import style from './Navbar.module.css';
import { BsFillSuitHeartFill } from 'react-icons/bs';


const Navbar = () => {
    return (
        <div className={style.navbar}>
            <h1> Kanban Board 
                <span style={{color:"red"}}>
                    {/* <BsFillSuitHeartFill /> */}
                </span>
            </h1>
        </div>
    )
}

export default Navbar