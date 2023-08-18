import React from 'react';
import searchIcon from './assets/search.svg'
import Image from 'next/image';


export const Search = ({ }) => (
    <section style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#eee",
        padding: "8px",
        borderRadius: "4px"

    }}>
        <Image
            width={25}
            height={25}
            src={searchIcon}
            alt='search icon' style={{
                padding: "5px"
            }} />
        <input type="text" style={{
            outline: "none",
            border: "none",
            fontSize: "18px",
            background: "#eee",
            width: "500px",
            padding: "8px"
        }} placeholder='Search...' />
    </section>
);
