import React from "react";

import DayListIem from "./DayListItem";

export default function DayList(props) {
  const days = props.days.map(day => {
    return (
      <DayListIem
        key={day.id}
        name={day.name}
        spots={day.spots}
        selected={day.name === props.day}
        setDay={props.setDay}
      />
    );
  });
  return <ul>{days}</ul>;
};