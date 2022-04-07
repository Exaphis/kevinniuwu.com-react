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
  fallback?: string;
  alt?: string;
}) {
  if (!props.fallback) {
    return <img src={props.src} alt={props.alt} className={"card-image"} />;
  }
  return (
    <picture>
      <source srcSet={props.src} type="image/webp" />
      <img src={props.fallback} alt={props.alt} className={"card-image"} />
    </picture>
  );
}
