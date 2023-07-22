import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div>
      <h1>Opss... essa página não existe</h1>

      <Link to="/">Acessar Home</Link>
    </div>
  );
}
