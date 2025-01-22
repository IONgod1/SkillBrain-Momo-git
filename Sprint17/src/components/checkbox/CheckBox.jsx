import React, { useState } from "react";

import "./Checkbox.css";

const Checkbox = (props) => {
  const [checked, setChecked] = useState(!!props.checked);

  const handleCheckboxChange = (e) => {
    if (e.target.checked !== checked) {
      setChecked(e.target.checked);
      props.onChange(e.target.checked);
    }
  };

  return (
    <div className="round">
      <input
        value={checked}
        checked={checked}
        onChange={handleCheckboxChange}
        type="checkbox"
      />
      <label
        className={`checkbox ${checked ? "checkbox--active" : ""}`}
        htmlFor="checkbox"
      ></label>
    </div>
  );
};

export default Checkbox;
