import React from 'react'
import style from './Card.module.css'
import { BsThreeDots } from 'react-icons/bs'
import Chip from '../Chip/Chip'

const Card = () => {
  return (
    <>
        <div className={style.card_container}>
            <div className={style.card}>
                <div className={style.card_top}>
                    <div className={style.card_labels}>
                        <Chip text="Frontend" color="violet" />
                        <Chip close text="Frontend" color="pink" />
                    </div>
                    <div className={style.card_icon}>
                        <BsThreeDots />
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default Card