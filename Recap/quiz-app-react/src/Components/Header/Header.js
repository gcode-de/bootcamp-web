import "./Header.css";

export default function Header({ children }) {
  return (
    <header className="header">
      <h1>
        <a href="./index.html">{children}</a>
      </h1>
    </header>
  );
}
