import React from "react";
import classes from "./Auth.module.scss";
import NavBar from "../common/components/NavBar/NavBar";
import AuthForm from "./containers/AuthForm";

const Auth: React.FC = () => {
  const navBarOptions = [
    {
      label: "Contact us",
      route: "/",
    },
    {
      label: "Extranet",
      route: "/",
    },
    {
      label: "APRA Connect",
      route: "/",
    },
    {
      label: "Knowledge Center",
      route: "/",
    },
  ];

  return (
    <div className={classes.container}>
      <NavBar options={navBarOptions} />
      <AuthForm />
    </div>
  );
};

export default Auth;
