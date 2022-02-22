import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="123213411"
          title="Xbox Series S"
          price={299.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/71NBQ2a52CL._AC_UL480_QL65_.jpg"
        />
        <Product
          id="123213412"
          title="PlayStation DualSense Wireless Controller – Midnight Black"
          price={69.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/61O9tWR6WDS._AC_UL480_QL65_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="123213413"
          title="PlayStation PULSE 3D Wireless Headset – Midnight Black"
          price={49.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/71kdXkr974L._AC_UY327_FMwebp_QL65_.jpg"
        />
        <Product
          id="123213414"
          title="Pokémon Legends: Arceus - Nintendo Switch"
          price={59.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/71HYKF4rO9L._AC_UL480_QL65_.jpg"
        />
        <Product
          id="123213415"
          title="AMD Ryzen 9 5950X 16-core, 32-Thread Unlocked Desktop Processor"
          price={580.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/616VM20+AzL._AC_SL1384_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="123213416"
          title="Acer Nitro 5 AN515-55-53E5 Gaming Laptop"
          price={1099.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_SL1500_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
