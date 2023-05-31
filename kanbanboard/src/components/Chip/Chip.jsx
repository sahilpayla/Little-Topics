import React from 'react'
import style from './Chip.module.css'
import { AiOutlineCloseCircle } from 'react-icons/ai'

const Chip = (props) => {
    return (
        <>
            <div className={style.chip} style={{ backgroundColor: props.color }}>
                <p>
                    {props.text}
                    {props.close && <AiOutlineCloseCircle onClick={props.onClose ? props.onClose() : ""} />}
                </p>
            </div>
        </>
    )
}

export default Chip