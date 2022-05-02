import "./NotFound.scss";

export function NotFound() {
  return (
    <div id="notfound">
      <h1 className="text__xxxl text__accent">404</h1>
      <p className="text__l text__semibold">
        The page you were looking for doesn't exist.
      </p>
      <a href="/" className="text__l">
        Back to home
      </a>
    </div>
  );
}
