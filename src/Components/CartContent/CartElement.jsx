import { useContext } from "react";
import { dataContext } from "../DataContext/DataContext";
import { MdDelete } from "react-icons/md";
import CartItemCounter from "./CartItemCounter";

const CartElement = () => {
  const { cart, setCart } = useContext(dataContext);

  const deleteProduct = (id) => {
    const foundID = cart.find((element) => element.id === id);

    const newCart = cart.filter((element) => {
      return element !== foundID;
    });

    setCart(newCart);
  };

  return cart.map((product) => {
    return (
      <div className="cardCenter">
        <div className="cardContent" key={product.id}>
          <img src={`/ImagesProducts/${product.img}`} alt="product" />
          <h4 className="cardName">{product.name}</h4>
          <CartItemCounter product={product} />
          <p className="cardPrice">$ {product.price * product.quanty}</p>
          <button
            className="cardDelete"
            onClick={() => deleteProduct(product.id)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    );
  });
};

export default CartElement;
