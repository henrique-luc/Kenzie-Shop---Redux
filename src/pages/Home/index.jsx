import Card from "../../components/Card";
import Header from "../../components/Header";
import { Ul } from "./style";

import { useSelector } from "react-redux";

export default function Home() {
  const products = useSelector(({ products }) => products);

  return (
    <>
      <Header isHome />
      <Ul>
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </Ul>
    </>
  );
}
