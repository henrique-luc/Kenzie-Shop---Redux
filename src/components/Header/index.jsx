import { HeaderContainer } from "./style";
import { useHistory } from "react-router-dom";

export default function Header({ isHome = false }) {
  const history = useHistory();

  return (
    <HeaderContainer>
      <h1>
        <span>KA</span>.ZA
      </h1>
      <section className="container_header-buttons">
        <div>
          <figure></figure>
          {isHome ? (
            <button onClick={() => history.push("/cart")}>Carrinho</button>
          ) : (
            <button onClick={() => history.push("/")}>Home</button>
          )}
        </div>
        <div>
          <figure></figure>
          <button>Entrar</button>
        </div>
      </section>
    </HeaderContainer>
  );
}
