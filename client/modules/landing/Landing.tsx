import React from "react";
import classes from "./Landing.module.scss";
import Typography from "../common/components/Typography/Typography";
import SearchBar from "./components/SearchBar/SearchBar";

function Landing() {
  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <Typography variant="heading" className={classes.title}>
          Trip Planner
        </Typography>
        <Typography variant="subheading" className={classes.description}>
          Plan your perfect trip with just a few clicks!
        </Typography>
        <Typography variant="subheading" className={classes.description}>
          Get detailed schedule for your chosen destination
        </Typography>
      </div>

      <div className={classes.inputContainer}>
        <SearchBar
          placeholder="Plan Your Trip..."
          onSubmit={() => console.log("hello")}
        />
      </div>
    </div>
  );
}

export default Landing;
