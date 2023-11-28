import React from "react";
import "./Banners.css";
import { BsFillAirplaneFill } from "react-icons/bs";
import { FaWallet, FaGift } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";

const Banners = () => {
  return (
    <figure className="content-grid-banners">
      <div className="content-banners">
        <i>
          <BsFillAirplaneFill />
        </i>
        <div className="content-text-banners">
          <h4>Envios a nivel mundial</h4>
          <p>100% gratuito</p>
        </div>
      </div>

      <div className="content-banners">
        <i>
          <FaWallet />
        </i>
        <div className="content-text-banners">
          <h4>Contrareembolso</h4>
          <p>100% garantia devolucion de dinero</p>
        </div>
      </div>

      <div className="content-banners">
        <i>
          <FaGift />
        </i>
        <div className="content-text-banners">
          <h4>Tarjeta de puntos</h4>
          <p>Canjea puntos por ofertas especiales</p>
        </div>
      </div>

      <div className="content-banners">
        <i>
          <BiSupport />
        </i>
        <div className="content-text-banners">
          <h4>Servicio al cliente</h4>
          <p>Llamenos 24/7 al +123-456-789</p>
        </div>
      </div>
    </figure>
  );
};

export default Banners;
