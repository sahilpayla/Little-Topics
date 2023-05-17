import React from 'react'
import Header from '../Header/Header'
import SideNav from '../SideNav/SideNav'
import styles from './WholePackage.module.css';
import Right from '../Right/Right';

const WholePackage = () => {
    return (
        <>
            <div className={styles.container}>
                <SideNav />
                <Right />
            </div>
        </>
    )
}

export default WholePackage