import React from 'react'
import Header from '../Header/Header'
import SideNav from '../SideNav/SideNav'
import styles from './WholePackage.module.css';

const WholePackage = () => {
    return (
        <>
            <div className={styles.container}>
                <SideNav />
                <Header />
            </div>
        </>
    )
}

export default WholePackage