import { HeaderContainer } from "./style";

export default function Header() {
  return (
    <HeaderContainer>
      <h1>
        <span>KA</span>.ZA
      </h1>
      <section className="container_header-buttons">
        <div>
          <figure></figure>
          <button>Carrinho</button>
        </div>
        <div>
          <figure></figure>
          <button>Entrar</button>
        </div>
      </section>
    </HeaderContainer>
  );
}
