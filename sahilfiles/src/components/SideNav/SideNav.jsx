import React from 'react'
import styles from './SideNav.module.css';
import logo from '../../images/logo.svg'
// import Link from 'react-router-dom'
import { HiHome } from 'react-icons/hi'
import { GiDiamonds } from 'react-icons/gi'
import { AiFillStar, AiFillCopy } from 'react-icons/ai'
import { IoIosSettings } from 'react-icons/io'
import { IoDocumentLockOutline } from 'react-icons/io5'
import { GiPapers } from 'react-icons/gi'
import { BsAwardFill, BsHddRackFill } from 'react-icons/bs'
// import { BsHddRackFill } from 'react-icons/bs'


const SideNav = () => {
    return (
        <>
            <div className={styles.sidenav}>
                {/* <Link to='/'> */}
                    <div className={styles.logo_container}>
                        <img src={logo} alt="rare_billion_logo" />
                    </div>
                {/* </Link> */}
                <div className={styles.sidenav_bar}>
                    <div className={styles.nav_link}>
                        <div className={styles.nav_link_icon}>
                            <HiHome />
                        </div>
                        Dashboard
                    </div>
                    <div className={styles.nav_link}>
                        <div className={styles.nav_link_icon}>
                            <AiFillStar />
                        </div>
                        Jobs
                    </div>
                    <div className={styles.nav_link}>
                        <div className={styles.nav_link_icon}>
                            <BsHddRackFill />
                        </div>
                        Recruiters
                    </div>
                    <div className={styles.nav_link}>
                        <div className={styles.nav_link_icon}>
                            <BsAwardFill />
                        </div>
                        Candidates
                    </div>
                    <div className={styles.nav_link}>
                        <div className={styles.nav_link_icon}>
                            <AiFillCopy />
                        </div>
                        Roles & Permission
                    </div>
                    <div className={styles.nav_link}>
                        <div className={styles.nav_link_icon}>
                            <GiPapers />
                        </div>
                        Account
                    </div>
                    <div className={styles.nav_link}>
                        <div className={styles.nav_link_icon}>
                            <IoIosSettings />
                        </div>
                        Settings
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideNav