import { useSelector } from "react-redux";
import CardCart from "../../components/Cart";
import Header from "../../components/Header";
import { Section } from "./style";

export default function CartPage() {
  const cart = useSelector(({ cart }) => cart);

  return (
    <div>
      <Header />
      <Section>
        <ul>
          {cart.map((product, index) => (
            <CardCart key={index} product={product} isRemovable></CardCart>
          ))}
        </ul>
      </Section>
    </div>
  );
}
