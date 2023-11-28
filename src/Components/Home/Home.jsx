import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Banners from "../Banners/Banners";
import Products from "../Products/Products";
import Galery from "../Galery/Galery";
import Testimonials from "../Testimonials/Testimonials";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Banners />
      <h1 id="productos" className="title-products">
        Productos
      </h1>
      <article className="container-grid-products">
        <Products />
      </article>
      <Galery />
      <div id="testimonio" className="relativeTestimonial">
        <h2 className="titleTestimonial">Testimonios</h2>
        <Testimonials />
      </div>
      <Footer />
    </>
  );
};

export default Home;
