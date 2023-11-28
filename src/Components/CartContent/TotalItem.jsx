import { useContext } from "react";
import { dataContext } from "../DataContext/DataContext";

const TotalItem = () => {
  const { cart } = useContext(dataContext);

  const itemsQuanty = cart.reduce((acc, el) => acc + el.quanty, 0);

  return <span className="cardTotalItems">{itemsQuanty}</span>;
};

export default TotalItem;
