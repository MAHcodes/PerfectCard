const Arrow = ({open, fill}) => (
  <svg
    width="20px"
    height="20px"
    fill={fill}
    viewBox="0 0 1024 1024"
    style={{transform: `rotate(${open ? "90deg" : "-90deg"})`, transition: "var(--transition-d) var(--transition-tf)"}}
  >
    <path d="M573.056 752l308.8-404.608A76.8 76.8 0 0 0 820.736 224H203.232a76.8 76.8 0 0 0-61.056 123.392l308.8 404.608a76.8 76.8 0 0 0 122.08 0z" />
  </svg>
);


export default Arrow;
