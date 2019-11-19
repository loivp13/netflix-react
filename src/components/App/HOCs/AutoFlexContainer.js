import React from "react";
export default function AutoFlexContainer(props) {
  let cssClass = "AutoFlexContainer";
  console.log(props);
  if (props.isCondense) {
    cssClass = "AutoFlexContainer" + "--condense";
  } else {
    cssClass = cssClass + "--notCondense";
  }
  return <div className={cssClass}>{props.children}</div>;
}
