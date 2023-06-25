import React, { useState } from "react";
import styles from "./SearchBox.module.scss";

const SearchBox: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className={styles.searchBox}>
      <div className={styles.inputWrapper}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
          className={styles.input}
        />
        <button className={styles.button}>
          <i className="fa fa-search" />
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
