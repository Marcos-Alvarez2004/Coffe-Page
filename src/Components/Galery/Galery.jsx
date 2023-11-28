import "./Galery.css";
import AmericanCoffe from "../../Images/american-coffe.jpg";
import MochaCoffe from "../../Images/mocha-coffe.jpg";
import BlackCoffe from "../../Images/black-coffe.webp";
import ColdCoffe from "../../Images/cold-coffe.jpg";
import PeopleCoffe from "../../Images/people-coffe.jpg";

const Galery = () => {
  return (
    <section id="galeria">
      <h2 className="title-galery">Galeria</h2>
      <div className="container-galery">
        <div className="card-galery" id="item1">
          <img src={AmericanCoffe} alt="imagen1" className="img-galery" />
          <h3>Cafe Americano</h3>
        </div>

        <div className="card-galery" id="item2">
          <img src={MochaCoffe} alt="imagen2" className="img-galery" />
          <h3>Cafe Mocha</h3>
        </div>

        <div className="card-galery" id="item3">
          <img src={PeopleCoffe} alt="imagen3" className="img-galery" />
          <div className="text-galery">
            <h4>Cafe de calidad</h4>
            <p>Lorem ipsum dolor sit amet.</p>
            <button>COMPRA AHORA</button>
          </div>
        </div>

        <div className="card-galery" id="item4">
          <img src={BlackCoffe} alt="imagen4" className="img-galery" />
          <h3>Cafe Negro</h3>
        </div>

        <div className="card-galery" id="item5">
          <img src={ColdCoffe} alt="imagen5" className="img-galery" />
          <h3>Cafe Frio</h3>
        </div>
      </div>
    </section>
  );
};

export default Galery;
