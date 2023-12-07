import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <section className="container-grid-footer">
        <div className="column-footer ">
          <div className="title-footer">
            <h3>Nosotros</h3>
          </div>

          <div className="about-us">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptate nam eos eligendi ex quia iure officiis aliquid, vel
              neque nulla illo eius? In fuga unde porro nisi dolorem molestias
              eaque?
            </p>
          </div>
        </div>
        <div className="column-footer social">
          <div className="title-footer">
            <h3>Redes sociales</h3>
          </div>
          <ul>
            <li>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                <i>
                  <FaXTwitter />
                </i>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <i>
                  <FaFacebookF />
                </i>
              </a>
            </li>
            <li>
              <a
                href="https://www.whatsapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                <i>
                  <FaWhatsapp />
                </i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <i>
                  <FaInstagram />
                </i>
              </a>
            </li>
          </ul>
        </div>
        <div className="column-footer contact">
          <div className="title-footer">
            <h3>Contacto</h3>
          </div>
          <p>
            <b>Dirección:</b> Buenos Aires, 9 de julio.
          </p>
          <p>
            <b>Numero:</b> +123456789
          </p>
          <p>
            <b>Email:</b> example@gmail.com
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
