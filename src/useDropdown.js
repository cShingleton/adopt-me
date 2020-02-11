import React, { useState } from "react";

const useDropdown = (label, defaultState, options) => {
  const [state, setState] = useState(defaultState);
  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;
  const Dropdown = () => (
    <label htmlFor={id}>
      {label}
      <select
        id={id}
        value={state}
        onChange={ev => setState(ev.target.value)}
        onBlur={ev => setState(ev.target.value)}
        disabled={!options.length}
      >
        <option>All</option>
        {options.map(opt => (
          <option value={opt} key={opt}>
            {opt}
          </option>
        ))}
      </select>
    </label>
  );

  return [state, Dropdown, setState];
};

export default useDropdown;
