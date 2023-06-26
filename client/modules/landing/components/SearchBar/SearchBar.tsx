import { useState, ChangeEvent } from "react";
import styles from "./SearchBar.module.scss";
import Image from "next/image";
import SearchIcon from "@/assets/icons/search_white.svg";

interface SearchBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onClick: () => void;
}

const SearchBox = ({ onClick, ...other }: SearchBoxProps) => {
  return (
    <div className={styles.container}>
      <input type="text" {...other} />
      <div className={styles.search} onClick={onClick}>
        <Image
          width={25}
          src={SearchIcon}
          alt=""
          className={styles.searchImage}
        />
      </div>
    </div>
  );
};

export default SearchBox;
