import { useState } from "react";
import classes from "./HamburgerMenu.module.scss";
import type { NavOption } from "../NavBar";
import NavBarOption from "../NavOption/NavBarOption";

type Props = {
  options: NavOption[];
};

type HamburgerButtonProps = {
  onClick: () => void;
  showMenu: boolean;
};

const HamburgerButton = ({ onClick, showMenu }: HamburgerButtonProps) => {
  return (
    <div
      className={`${classes.hamburger} ${showMenu ? classes.menuOpen : ""}`}
      onClick={onClick}
    >
      <div className={classes.line}></div>
      <div className={classes.line}></div>
      <div className={classes.line}></div>
    </div>
  );
};

const HamburgerMenu = ({ options }: Props) => {
  const [showMenu, setShowMenu] = useState(false);
  const backDropClasses = `${classes.BackDrop} ${
    showMenu ? classes.Open : classes.Closed
  }`;

  const handleToggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <div className={classes.hamburgerMenu}>
      <HamburgerButton onClick={handleToggleMenu} showMenu={showMenu} />

      <div className={backDropClasses} onClick={handleToggleMenu} />

      <div className={`${classes.menu} ${showMenu && classes.showMenu}`}>
        {options.map((option, index) => (
          <NavBarOption
            key={index}
            option={option}
            variant="black"
            className={classes.navOption}
            onClick={handleToggleMenu}
          />
        ))}
      </div>
    </div>
  );
};

export default HamburgerMenu;
