import React from 'react'
import style from './Board.module.css'
import { BsThreeDots } from 'react-icons/bs';
import Card from '../Card/Card';

const Board = () => {
    return (
        <div className={style.board}>
            <div className={style.board_top}>
                <div className={style.board_title}>
                    Today Task{" "}
                    <span className={style.board_number}>6</span>
                </div>
                <BsThreeDots />
            </div>

            <div className={style.board_cards}>
                <Card />
                {/* <h1>Cards</h1> */}
            </div>
        </div>
    )
}

export default Board