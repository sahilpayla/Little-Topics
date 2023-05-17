import React from 'react'
import styles from './Table.module.css';
import { CgTrashEmpty } from 'react-icons/cg'

const Table = () => {

    const data = [
        { id: 1, name: 'John Doe', email: "Ester@gmail.com", role: 'admin', action: <CgTrashEmpty /> },
        { id: 2, name: 'king Doe', email: "Ester@gmail.com", role: 'admin', action: <CgTrashEmpty /> },
        { id: 3, name: 'paul Doe', email: "Ester@gmail.com", role: 'admin', action: <CgTrashEmpty /> },
        { id: 4, name: 'kim Doe', email: "Ester@gmail.com", role: 'admin', action: <CgTrashEmpty /> },
        { id: 5, name: 'loiuis  Doe', email: "Ester@gmail.com", role: 'admin', action: <CgTrashEmpty /> },
        { id: 6, name: 'pious Doe', email: "Ester@gmail.com", role: 'admin', action: <CgTrashEmpty /> },

    ];


    return (
        <>
            <div className={styles.main_table}>

                <div className={styles.header_front}>
                    <div className={styles.header_box}>
                        <div className={styles.header_left}>
                            <div className={styles.heading}>Roles & Permission</div>
                            <div className={styles.subheading}>An Overview of all your roles and permission over the year.</div>
                        </div>
                        <div className={styles.header_right}>
                            <button className={styles.add_new_user}>
                                <span style={{ fontSize: "30px", paddingRight: "10px" }}>+</span> Add New User
                            </button>
                        </div>
                    </div>

                    <div className={styles.manage_user}>
                        <div className={styles.all}>All</div>
                        <div className={styles.all}>Manage User</div>
                    </div>
                </div>

                <div className={styles.table_heading}>
                    <table>
                        <thead className={styles.table_head}>
                            <tr>
                                <th style={{fontWeight:"500"}}>id</th>
                                <th style={{fontWeight:"500"}}>Name</th>
                                <th style={{fontWeight:"500"}}>Email</th>
                                <th style={{fontWeight:"500"}}>Role</th>
                                <th style={{fontWeight:"500"}}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row) => (
                                <tr key={row.id}>
                                    <td>{row.id}</td>
                                    <td >{row.name}</td>
                                    <td style={{ color: "grey" }}>{row.email}</td>
                                    <td style={{ color: "grey" }}>{row.role}</td>
                                    <td style={{ color: "red", fontWeight: "bold" }}>{row.action}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Table

