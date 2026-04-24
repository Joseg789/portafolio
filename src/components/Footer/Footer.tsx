import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" aria-label="Pie de página">
      <span className="footer__copy">Jose Sanchez — {year}</span>
      <span className="footer__tech">
        Diseñado &amp; desarrollado con React + TypeScript + Node
      </span>
    </footer>
  );
}
