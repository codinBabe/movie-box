import React, { useState } from "react";
import styles from "./Search.module.css";
import icon from "../../assets/Search.svg";


const Search = () => {
    return (
        <form className={styles.search_component}>
            <input
                type="text"
                placeholder="What did you want to watch?"
            />
            <button type="submit">
                <img src={icon} alt="" />
            </button>
        </form>
    )
};

export default Search;






