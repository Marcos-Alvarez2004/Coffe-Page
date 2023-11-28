import { useContext } from "react";
import { dataContext } from "../DataContext/DataContext";
import { FaShoppingCart } from "react-icons/fa";
import "./Products.css";

const Products = () => {
  const { data, buyProduct } = useContext(dataContext);
  return data.map((product) => {
    return (
      <div className="card-product" key={product.id}>
        <img src={`/ImagesProducts/${product.img}`} alt="producto" />
        <h4 className="title-card-product">{product.name}</h4>
        <p className="price-card-product">$ {product.price}</p>
        <button className="btn-buy" onClick={() => buyProduct(product)}>
          <i>
            <FaShoppingCart />
          </i>
        </button>
      </div>
    );
  });
};

export default Products;
