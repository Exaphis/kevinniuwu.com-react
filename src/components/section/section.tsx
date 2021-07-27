import React from "react";
import "./section.scss";

export function SectionPreview(props: {
  name: string;
  content: string;
  onClick?: () => void;
}) {
  return (
    <div className="section-preview">
      <button
        className="font-mono text__accent text__xl"
        onClick={props.onClick}
      >
        {props.name}
      </button>
      <p className="text__l">{props.content}</p>
    </div>
  );
}

export function Section(props: {
  preTitle: string;
  title: string;
  id?: string;
  innerRef?: any;
  children?: React.ReactNode;
}) {
  return (
    <div ref={props.innerRef}>
      <h2 className="font-mono text__xl">{props.preTitle}</h2>
      <h1 className="text__xxl text__accent">{props.title}</h1>
      <div id={props.id}>{props.children}</div>
    </div>
  );
}
