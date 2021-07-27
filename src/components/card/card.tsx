import React from "react";
import "./card.scss";

export function Card(props: {
  id?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <div
      id={props.id}
      onClick={props.onClick}
      className={"card" + (props.onClick ? " card-clickable" : "")}
    >
      {props.children}
    </div>
  );
}
