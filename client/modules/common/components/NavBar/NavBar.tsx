import React from "react";
import Image from "next/image";
import classes from "./NavBar.module.scss";
import Logo from "@/public/apra.png";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
import NavBarOption from "./NavOption/NavBarOption";

type NavOption = {
  label: string;
  route: string;
  active?: boolean;
  onClick?: () => void;
};

interface NavBarProps {
  options: NavOption[];
  variant?: "default" | "black";
}

function NavBar({ options, variant }: NavBarProps) {
  return (
    <div className={classes.container}>
      <Image src={Logo} alt="" className={classes.logo} />

      <div className={classes.optionContainer}>
        {options.map((option, index) => (
          <NavBarOption
            variant={variant || "default"}
            key={index}
            option={option}
          />
        ))}
      </div>

      <HamburgerMenu options={options} />
    </div>
  );
}

export default NavBar;
export type { NavOption };
