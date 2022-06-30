import React from "react";
import "./FilterOption.module.css";

function FilterOption(props) {
  return (
    <div>
      <input
        onClick={props.onClick}
        type="checkbox"
      />
      <label>{props.label}</label>
    </div>
  );
}

export default FilterOption;
