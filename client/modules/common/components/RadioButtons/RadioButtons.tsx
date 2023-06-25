import React, { useState } from "react";
import classes from "./RadioButtons.module.scss";

type Props = {
  name: string;
  options: string[];
  arrangement: "vertical" | "horizontal";
  setChosenValue: (str: string) => void;
};

const RadioButton: React.FC<Props> = ({
  name,
  options,
  arrangement,
  setChosenValue,
}) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
    setChosenValue(event.target.value);
  };

  const radioButtonsStyle = [classes.radioButton, classes[arrangement]].join(
    " "
  );

  return (
    <div className={radioButtonsStyle}>
      {options.map((value) => (
        <label key={value} className={classes.label}>
          <input
            type="radio"
            name={name}
            value={value}
            className={classes.input}
            checked={selectedValue === value}
            onChange={handleChange}
          />
          <span className={classes.checkmark}></span>
          {value}
        </label>
      ))}
    </div>
  );
};

RadioButton.defaultProps = {
  arrangement: "vertical",
};

export default RadioButton;
