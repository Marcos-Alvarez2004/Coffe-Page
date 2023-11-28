import "./Hero.css";
import hero from "../../Images/hero.jpg";

const Hero = () => {
  return (
    <main id="inicio" className="container-flex">
      <div className="container-img">
        <img src={hero} alt="" />
        <div className="container-text">
          <h4>Cafe Delicioso</h4>
          <h1>100% Natural</h1>
          <h2>Cafe Fresco</h2>
          <button>Comprar Ahora</button>
        </div>
      </div>
    </main>
  );
};

export default Hero;
