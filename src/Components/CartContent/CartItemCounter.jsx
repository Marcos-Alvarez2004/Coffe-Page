import { useContext } from "react";
import { dataContext } from "../DataContext/DataContext";
import { RiSubtractFill } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";

const CartItemCounter = ({ product }) => {
  const { cart, setCart, buyProduct } = useContext(dataContext);

  const decrese = () => {
    const productRepeat = cart.find((item) => item.id === product.id);

    productRepeat.quanty !== 1 &&
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...product, quanty: productRepeat.quanty - 1 }
            : item
        )
      );
  };
  return (
    <>
      <i className="CounterBtn decrese" onClick={decrese}>
        <RiSubtractFill />
      </i>
      <p className="cardItems">{product.quanty}</p>
      <i className="CounterBtn plus" onClick={() => buyProduct(product)}>
        <AiOutlinePlus />
      </i>
    </>
  );
};

export default CartItemCounter;
