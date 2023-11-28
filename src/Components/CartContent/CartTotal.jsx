import { useContext } from "react";
import { dataContext } from "../DataContext/DataContext";

const CartTotal = () => {
  const { cart } = useContext(dataContext);

  const total = cart.reduce((acc, el) => acc + el.price * el.quanty, 0);
  return (
    <div className="cardTotal">
      <h3>Total a pagar: $ {total} </h3>
    </div>
  );
};

export default CartTotal;
