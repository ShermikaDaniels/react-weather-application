import React from "react";

export default function WeatherIcon(props) {
  return <img alt="icon" src={props.code} size={props.size} />;
}
