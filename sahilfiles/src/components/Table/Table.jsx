import React from 'react'
import styles from './Table.module.css';
import { CgTrashEmpty } from 'react-icons/cg'
import ReactSwitch from 'react-switch';
import Switch from 'react-switch';

const Table = () => {

    const data = [
        {
            id: 1,
            profile: "https://www.freepnglogos.com/uploads/windows-logo-png/windows-logo-logok-0.png",
            name: 'John Doe',
            email: "Ester@gmail.com",
            role: 'admin',
            action: <CgTrashEmpty />
        },
        {
            id: 4221,
            profile: "https://www.freepnglogos.com/uploads/windows-logo-png/windows-logo-logok-0.png",
            name: 'John Doe',
            email: "Ester@gmail.com",
            role: 'admin',
            action: <CgTrashEmpty />
        },
        {
            id: 1332,
            profile: "https://www.freepnglogos.com/uploads/windows-logo-png/windows-logo-logok-0.png",
            name: 'John Doe',
            email: "Ester@gmail.com",
            role: 'admin',
            action: <CgTrashEmpty />
        },
        {
            id: 1245,
            profile: "https://www.freepnglogos.com/uploads/windows-logo-png/windows-logo-logok-0.png",
            name: 'John Doe',
            email: "Ester@gmail.com",
            role: 'admin',
            action: <CgTrashEmpty />
        },
        {
            id: 1344,
            profile: "https://www.freepnglogos.com/uploads/windows-logo-png/windows-logo-logok-0.png",
            name: 'John Doe',
            email: "Ester@gmail.com",
            role: 'admin',
            action: <CgTrashEmpty />
        },
        {
            id: 1033,
            profile: "https://www.freepnglogos.com/uploads/windows-logo-png/windows-logo-logok-0.png",
            name: 'John Doe',
            email: "Ester@gmail.com",
            role: 'admin',
            action: <CgTrashEmpty />
        },
        {
            id: 1090,
            profile: "https://www.freepnglogos.com/uploads/windows-logo-png/windows-logo-logok-0.png",
            name: 'John Doe',
            email: "Ester@gmail.com",
            role: 'admin',
            action: <CgTrashEmpty />
        },


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
                                <th className={styles.id_head}>id</th>
                                <th style={{ fontWeight: "500" }}>Name</th>
                                <th style={{ fontWeight: "500" }}>Email</th>
                                <th style={{ fontWeight: "500" }}>Role</th>
                                <th style={{ fontWeight: "500" }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row) => (
                                <tr key={row.id}>
                                    <td className={styles.id_pic}>
                                        <div className={styles.id_pic_new}>
                                            <img src={row.profile} />
                                        </div>
                                        <div className={styles.id_new}>
                                            #{row.id}
                                        </div>
                                    </td>
                                    <td>{row.name}</td>
                                    <td style={{ color: "grey" }}>{row.email}</td>
                                    <td style={{ color: "grey" }}>{row.role}</td>
                                    <td style={{ color: "red", fontWeight: "bold" }}>
                                        <label htmlFor="material-switch">
                                            {/* <span>Switch with style inspired by Material Design</span> */}
                                            <Switch
                                                // checked={job.isActive}
                                                onChange={(checked, e, id) => {
                                                    // handleToogle(job._id);
                                                }}
                                                onColor="#E4CFFF"
                                                onHandleColor="#2186F2"
                                                handleDiameter={18}
                                                uncheckedIcon={false}
                                                checkedIcon={false}
                                                // boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                                                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                                                height={12.23}
                                                width={30}
                                                className="react-switch"
                                                id="material-switch"
                                            />
                                        </label>
                                    </td>
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

