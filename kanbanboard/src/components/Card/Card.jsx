import React from 'react'
import style from './Card.module.css'
import { BsThreeDots } from 'react-icons/bs'
import Chip from '../Chip/Chip'
import { AiOutlineCheckSquare, AiOutlineClockCircle } from 'react-icons/ai'

const Card = () => {
  return (
    <>
        <div className={style.card_container}>
            <div className={style.card}>
                <div className={style.card_top}>
                    <div className={style.card_labels}>
                        <Chip text="Frontend" color="green"/>
                        <Chip close text="Frontend" color="orange" />
                    </div>
                    <div className={style.card_icon}>
                        <BsThreeDots />
                    </div>
                </div>
                <div className={style.card_title}>
                    title
                </div>
                <div className={style.card_footer}>
                    <p><AiOutlineClockCircle/> 29 Sept 2023</p>
                    <p><AiOutlineCheckSquare/> 1/4</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Card