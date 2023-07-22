import { Link } from "react-router-dom";
import "./header.css";

export function Header() {
  return (
    <header>
      <h2>Sujeito Programador</h2>

      <div>
        <Link to="/about">Sobre</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/products">Produtos</Link>
      </div>
    </header>
  );
}
