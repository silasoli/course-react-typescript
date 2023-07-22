import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export function Product() {
  const { id } = useParams();
  return (
    <div>
      <h1>Bem vindo a página Produto {id}</h1>

      <Link to="/">Home</Link>
    </div>
  );
}
