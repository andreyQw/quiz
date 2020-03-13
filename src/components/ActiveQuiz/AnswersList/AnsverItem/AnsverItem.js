import React from "react";
import classes from "./AnsverItem.module.css";

const AnsverItem = props => {
  const cls = [classes.AnsverItem];
  if (props.state) {
    cls.push(classes[props.state]);
  }
  return (
    <li
      className={cls.join(" ")}
      onClick={() => props.onAnswerClick(props.answer.id)}
    >
      {props.answer.text}
    </li>
  );
};

export default AnsverItem;
