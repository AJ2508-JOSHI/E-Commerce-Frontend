import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const MyCarousel = () => {
  return (
    <Carousel>
      <div>
        <img
          style={{ width: "100%", height: 100 }}
          src="https://images.moneycontrol.com/static-mcnews/2023/06/Best-smartphones-under-Rs-30000-770x433.jpg?impolicy=website&width=770&height=431"
          alt="Slide 1"
        />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img
          style={{ width: "100%", height: 100 }}
          src="https://img.freepik.com/free-photo/interior-clothing-store-with-stylish-merchandise-racks-fashionable-brand-design-casual-wear-modern-boutique-empty-fashion-showroom-shopping-centre-with-elegant-merchandise_482257-65537.jpg?t=st=1715451557~exp=1715455157~hmac=ab8b9f1db6e65db811c9c47888276b1f0d92bd2b0b965e06b0f0e3760dd49cc9&w=1380"
          alt="Slide 2"
        />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img
          style={{ width: "100%", height: 100 }}
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Slide 3"
        />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};

export default MyCarousel;
