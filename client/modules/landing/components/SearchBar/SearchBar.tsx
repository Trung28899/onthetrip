import { useState, ChangeEvent } from "react";
import styles from "./SearchBar.module.scss";
import Image from "next/image";
import SearchIcon from "@/assets/icons/search_white.svg";

interface SearchBoxProps {
  placeholder: string;
  onSubmit: (searchQuery: string) => void;
}

const SearchBox = ({ placeholder, onSubmit }: SearchBoxProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleFormSubmit = () => {
    onSubmit(searchQuery);
  };

  return (
    <div className={styles.container}>
      <input type="text" placeholder={placeholder} />
      <div className={styles.search}>
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
