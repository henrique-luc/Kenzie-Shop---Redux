import { Div } from "./style";
import { useDispatch } from "react-redux";
import {
  AddToCartThunk,
  RemoveFromCartThunk,
} from "../../store/modules/Cart/thunks";

export default function CardCart({ product, isRemovable = false }) {
  const dispatch = useDispatch();
  const { name, price, image, id } = product;

  return (
    <Div>
      <li>
        <figure>
          <img src={image} alt={name} />
          <figcaption>{name}</figcaption>
        </figure>
        <section>
          <h2>{name}</h2>
          <span>R$ {price}</span>
          {isRemovable ? (
            <button onClick={() => dispatch(RemoveFromCartThunk(id))}>
              Remover
            </button>
          ) : (
            <button onClick={() => dispatch(AddToCartThunk(product))}>
              Adicionar ao carrinho
            </button>
          )}
        </section>
      </li>
    </Div>
  );
}
