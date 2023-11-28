import { useContext } from "react";
import { dataContext } from "../DataContext/DataContext";
import { FaLongArrowAltLeft } from "react-icons/fa";

import CartElement from "./CartElement";
import CartTotal from "./CartTotal";

import "./CartContent.css";
import { Link } from "react-router-dom";

const CartContent = () => {
  const { cart } = useContext(dataContext);

  // Condition
  return (
    <>
      <div className="returnPage">
        <i>
          <FaLongArrowAltLeft />
        </i>
        <Link className="linkCart" to="/">
          Volver a la Pagina
        </Link>
      </div>
      {cart.length > 0 ? (
        <>
          <CartElement />
          <CartTotal />
        </>
      ) : (
        <h2 className="cardEmpty">Tu carrito esta vacio!</h2>
      )}
    </>
  );
};

export default CartContent;
