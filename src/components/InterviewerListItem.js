import React from "react";

import "components/InterviewerListItem.scss";
import className from "classnames";

export default function InterviewerListItem(props) {
  let itemClass = className("interviewers__item", {
    "interviewers__item--selected": props.selected,
  });
  return (
    <li className={itemClass} onClick={props.setInterviewer}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  );
}
