import { useRouter } from "next/router";
import { NavOption } from "../NavBar";
import classes from "./NavBarOption.module.scss";

interface NavBarOptionProps {
  variant?: "default" | "black";
  option: NavOption;
  className?: string;
  onClick?: () => void;
}

function NavBarOption(props: NavBarOptionProps) {
  const { variant, option, className, onClick } = props;
  const { label, route, active, onClick: onClickOption } = option;
  const router = useRouter();
  const navOptionClasses = [
    classes.navBarOption,
    classes[variant || "default"],
    active && classes.active,
    className || "",
  ].join(" ");

  const onClickHandler = () => {
    onClick?.();
    onClickOption?.();
    return router.push(route || "/");
  };

  return (
    <p className={navOptionClasses} onClick={onClickHandler}>
      {label}
    </p>
  );
}

export default NavBarOption;
