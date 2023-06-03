import React, { useEffect, useState } from 'react'
import styles from './Table.module.css';
import DataTable from 'react-data-table-component';
import axios from 'axios';

const Table = () => {
    const [country, setCountry] = useState([]);
    const getCountries = async () => {
        try {
            const res = await axios.get("https://restcountries.com/v2/all")
            console.log(res);
            setCountry(res.data);
        } catch (error) {
            console.log(error.message)
        }
    }


    useEffect(() => {
        getCountries(country);
    }, [])

    const columns = [
        {
            name: "Name",
            selector: (row) => row.name
        },
        {
            name: "Capital",
            selector: (row) => row.capital
        },
        {
            name: "Native",
            selector: (row) => row.nativeName
        },
        {
            name: "Flag",
            selector: (row) => <img width={60} height={60} src={row.flag}/>
        },
    ]
    return (
        <>
            <div className={styles.navbar}>
                <h1>React Data Table  Components</h1>
                <h3>npm install react-data-table-component</h3>
            </div>

            <DataTable
            // style={{fontWeight:"bold"}}
                title="Coutry Table"
                columns={columns}
                data={country}
                pagination
                selectableRows
                selectableRowsHighlight
                highlightOnHover
                pointerOnHover

                fixedHeader
                fixedHeaderScrollHeight='600px'
            />
        </>
    )
}

export default Table