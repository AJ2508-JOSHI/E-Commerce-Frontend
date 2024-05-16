import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/Category.css";
const Category__Component = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <main className="cate__main" style={{ marginBottom: 50 }}>
      <div className="nav__item">
        <img src="https://images.pexels.com/photos/1370082/pexels-photo-1370082.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <Link
          style={{ fontSize: 20 }}
          className="text"
          onClick={() => setIsOpen(false)}
          to={"/Appliances"}
        >
          Appliances
        </Link>
      </div>

      <div className="nav__item">
        <img src="https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <Link
          style={{ fontSize: 20 }}
          className="text"
          onClick={() => setIsOpen(false)}
          to={"/mobile"}
        >
          Mobiles
        </Link>
      </div>

      <div className="nav__item">
        <img src="https://images.pexels.com/photos/52518/jeans-pants-blue-shop-52518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Link
          style={{ fontSize: 20 }}
          className="text"
          onClick={() => setIsOpen(false)}
          to={"/Clothes"}
        >
          Clothes
        </Link>
      </div>

      <div className="nav__item">
        <img src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <Link
          style={{ fontSize: 20 }}
          className="text"
          onClick={() => setIsOpen(false)}
          to={"/Footwear"}
        >
          Footwear
        </Link>
      </div>

      <div className="nav__item">
        <img src="https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Link
          style={{ fontSize: 20 }}
          className="text"
          onClick={() => setIsOpen(false)}
          to={"/Grocery"}
        >
          Grocery
        </Link>
      </div>

      <div className="nav__item">
        <img src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Link
          style={{ fontSize: 20 }}
          className="text"
          onClick={() => setIsOpen(false)}
          to={"/Books"}
        >
          Books
        </Link>
      </div>

      <div className="nav__item">
        <img src="https://images.pexels.com/photos/208052/pexels-photo-208052.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <Link
          style={{ fontSize: 20 }}
          className="text"
          onClick={() => setIsOpen(false)}
          to={"/Beauty"}
        >
          Beauty
        </Link>
      </div>

      <div className="nav__item">
        <img src="https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <Link
          style={{ fontSize: 20 }}
          className="text"
          onClick={() => setIsOpen(false)}
          to={"/Sports"}
        >
          Sports
        </Link>
      </div>

      <div className="nav__item">
        <img src=" https://images.pexels.com/photos/583842/pexels-photo-583842.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <Link
          style={{ fontSize: 20 }}
          className="text"
          onClick={() => setIsOpen(false)}
          to={"/Electronic"}
        >
          Electronic
        </Link>
      </div>
    </main>
  );
};

export default Category__Component;
