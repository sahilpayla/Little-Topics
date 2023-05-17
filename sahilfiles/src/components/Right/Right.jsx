import React from 'react'
import styles from './Right.module.css'
import Table from '../Table/Table'
import Header from '../Header/Header'


const Right = () => {
    return (
        <>
            <div className={styles.right_container}>
                <Header />
                <Table />
            </div>
        </>
    )
}

export default Right