import React from 'react'
import styles from './Header.module.css';
import { AiOutlineSearch, AiTwotoneCalendar, AiFillQuestionCircle } from 'react-icons/ai'
import { BsFillBellFill } from 'react-icons/bs'
import person from '../../images/person.png'

//  ppp
const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.header_left}>
                {/* <AiOutlineSearch /> */}
                <input
                    type="search"

                    placeholder='Search for Sites, Tools or Users'
                />
            </div>

            <div className={styles.header_right}>
                <div className={styles.header_icons}>
                    <AiTwotoneCalendar />
                </div>
                <div className={styles.header_icons}>
                    <AiFillQuestionCircle />
                </div>
                <div className={styles.header_icons}>
                    <BsFillBellFill />
                </div>
                <div className={styles.header_icons}>
                    <img src={person} alt="person" />
                </div>
            </div>

        </div>
    )
}

export default Header