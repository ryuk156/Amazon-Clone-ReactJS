import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Collectibles/sfh/Hero-v7-web-1x._CB427848344_.jpg"
        alt="sale_banner"
      />

      <div className="home_row">
        <Product
          id="12312"
          title="Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz 9th Gen Intel Core i7) - Space Grey
 "
          Price={189805}
          rating={5}
          image="https://m.media-amazon.com/images/I/71L2iBSyyOL._AC_UY218_.jpg"
        />
        <Product
          id="123112"
          title="
          Apple Watch Series 5 (GPS + Cellular, 44mm) - Silver Aluminium Case with White Sport Band
 "
          Price={239000}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71Ojw4DESCL._SL1500_.jpg"
        />
      </div>

      <div className="home_row">
        <Product
          id="12312"
          title="Apple iPhone 11 (64GB) - Purple
 "
          Price={68300}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51oXVi%2BZhhL._SL1024_.jpg"
        />
        <Product
          id="12316"
          title="Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz 9th Gen Intel Core i7) - Space Grey
 "
          Price={189805}
          rating={5}
          image="https://m.media-amazon.com/images/I/71L2iBSyyOL._AC_UY218_.jpg"
        />
        <Product
          id="12318"
          title="
          Apple iPhone 11 Pro (64GB) - Midnight Green
 "
          Price={90000}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61itOh%2BJe8L._SL1024_.jpg"
        />
      </div>

      <div className="home_row">
        <Product
          id="123110"
          title="LG 23.8 inch (60.45 cm) Borderless LED Monitor - Full HD, IPS Panel with VGA, HDMI, Audio in/Out Ports and in-Built Speakers - 24MP88HV (Silver/White)
 "
          Price={40000}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/81rpK20lAtL._SL1500_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
