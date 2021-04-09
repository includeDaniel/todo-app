import React from "react";

export default (props) => {
  if (props.hide) {
    return null;
  } else {
    return (
      <button className={"btn btn-" + props.style} onClick={props.onClick}>
        <i className={"fa fa-" + props.icon}></i>
      </button>
    );
  }
};
