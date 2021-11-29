import React from "react";
import "./card.scss";

export function Card(props: {
  id?: string;
  children?: React.ReactNode;
  href?: string;
  onClick?: () => void;
}) {
  return (
    <a
      id={props.id}
      onClick={props.onClick}
      target="_blank"
      rel="noopener noreferrer"
      href={props.href}
      className={"card" + (props.href ? " card-clickable" : "")}
    >
      {props.children}
    </a>
  );
}

export function CardImage(props: {
  src: string;
  alt?: string;
}) {
  return (
    <img
      src={props.src}
      alt={props.alt}
      className={"card-image"}
    />
  );
}