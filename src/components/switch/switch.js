import React from "react";

export const Switch = (props) => {
  const { className, label, noText } = props;
  let switchClass = className;
  let id = label.toCamelCase();

  return (
    <div aria-label={label} className={switchClass}>
      <label className="switch__label" htmlFor={id}>
        <input
          role="switch"
          type="checkbox"
          className="switch__input"
          id={id}
        />
        <span className="switch__text" data-on="ON" data-off="OFF"></span>
        <span className="switch__handle"></span>
      </label>
    </div>
  );
};

export default Switch;
