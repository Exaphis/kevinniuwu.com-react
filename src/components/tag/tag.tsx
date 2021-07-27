import "./tag.scss";

export function Tag(props: { children: string }) {
  return <span className="tag font-mono">{props.children}</span>;
}
