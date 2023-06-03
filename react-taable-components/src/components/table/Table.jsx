import React, { useEffect, useState } from 'react'
import styles from './Table.module.css';
import DataTable from 'react-data-table-component';
import axios from 'axios';

const Table = () => {
    const [country, setCountry] = useState([]);
    const [search, setSearch] = useState("");
    const [filterCountry, setFilterCountry] = useState([]);

    const getCountries = async () => {
        try {
            const res = await axios.get("https://restcountries.com/v2/all")
            console.log(res);
            setCountry(res.data);
            setFilterCountry(res.data);
        } catch (error) {
            console.log(error.message)
        }
    }

    const columns = [
        {
            name: "Name",
            selector: (row) => row.name,
            sortable: true,
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
            selector: (row) => <img width={60} height={60} src={row.flag} />
        },
    ]


    useEffect(() => {
        getCountries();
    }, [])

    useEffect(() => {
        const result = country.filter((countries) => {
            return countries.name.toLowerCase().match(search.toLowerCase());
        })
        setFilterCountry(result);
    }, [search])

    return (
        <>
            <div className={styles.navbar}>
                <h1>React Data Table  Components</h1>
                <h3>npm install react-data-table-component</h3>
            </div>

            <DataTable
                columns={columns}
                data={filterCountry}
                pagination
                selectableRows
                selectableRowsHighlight
                highlightOnHover
                pointerOnHover
                subHeader
                subHeaderAlign='left'
                title="Coutry Table"
                subHeaderComponent={
                    <input
                        type='search'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className={styles.searchBar}
                        placeholder='Search Country'
                    />
                }
                fixedHeader
                fixedHeaderScrollHeight='600px'
            />
        </>
    )
}

export default Table