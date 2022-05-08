import { products } from "../../services/DataBase";
import { Ul } from "./style";

export default function Card() {
  return (
    <Ul>
      {products.map((product, id) => (
        <li key={id}>
          <figure>
            <img src={product.image} alt={product.name} />
            <figcaption>{product.name}</figcaption>
          </figure>
          <h2>{product.name}</h2>
          <span>R$ {product.price}</span>
          <button>Adicionar ao carrinho</button>
        </li>
      ))}
    </Ul>
  );
}
