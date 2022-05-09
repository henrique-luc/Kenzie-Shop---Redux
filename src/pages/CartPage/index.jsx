import { useSelector } from "react-redux";
import Card from "../../components/Card";
import Header from "../../components/Header";

export default function CartPage() {
  const cart = useSelector(({ cart }) => cart);

  return (
    <div>
      <Header />
      <ul>
        {cart.map((product, index) => (
          <Card key={index} product={product} isRemovable></Card>
        ))}
      </ul>
    </div>
  );
}
