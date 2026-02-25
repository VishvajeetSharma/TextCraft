import React from "react";

const Alert = (props) => {
  const capitalize = (word = "") => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.typo} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalize(props.alert.typo)}</strong>:{" "}
          {props.alert.msg}
        </div>
      )}
    </div>
  );
};

export default Alert;