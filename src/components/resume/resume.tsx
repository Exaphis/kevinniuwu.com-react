export function Resume() {
  return (
    <iframe
      style={{
        left: 0,
        height: "100vh",
        width: "100vw",
        border: "none",
      }}
      title="Kevin Wu Resume"
      src="https://kevinniuwu.com/.netlify/functions/resume-fetch"
    />
  );
}
