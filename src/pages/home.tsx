import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../components/loader";
import ProductCard from "../components/product-card";
import { useLatestProductsQuery } from "../redux/api/productAPI";
import { addToCart } from "../redux/reducer/cartReducer";
import { CartItem } from "../types/types";
import Category__ from "./Category__/Category__";
import Category__Component from "../components/Category__Component";
import MyCarousel from "../components/Carousel";
import Headerr from "../components/Headerr";
const Home = () => {
  const { data, isLoading, isError } = useLatestProductsQuery("");

  const dispatch = useDispatch();

  const addToCartHandler = (cartItem: CartItem) => {
    if (cartItem.stock < 1) return toast.error("Out of Stock");
    dispatch(addToCart(cartItem));
    toast.success("Added to cart");
  };

  if (isError) toast.error("Cannot Fetch the Products");
  console.log("img--> ", data);

  return (
    <>
      <div className="home">
        <Category__Component />
        {/* <section></section> */}

        {/* <MyCarousel /> */}

        <h1>
          Latest Products
          <Link to="/search" className="findmore">
            More
          </Link>
        </h1>

        <main>
          {isLoading ? (
            <Loader />
          ) : (
            data?.products.map((i) => (
              <ProductCard
                key={i._id}
                productId={i._id}
                name={i.name}
                price={i.price}
                stock={i.stock}
                handler={addToCartHandler}
                photo={i.photo}
              />
            ))
          )}
        </main>
      </div>
      <div style={{ marginTop: -150 }}>
        <Category__ />
      </div>
    </>
  );
};

export default Home;
