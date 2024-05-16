import { onAuthStateChanged } from "firebase/auth";
import { Suspense, lazy, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Headerr from "./components/Headerr";
import Loader from "./components/loader";
import ProtectedRoute from "./components/protected-route";
import { auth } from "./firebase";
import { getUser } from "./redux/api/userAPI";
import { userExist, userNotExist } from "./redux/reducer/userReducer";
import { RootState } from "./redux/store";

const Home = lazy(() => import("./pages/home"));
const Search = lazy(() => import("./pages/search"));
const Cart = lazy(() => import("./pages/cart"));
const Shipping = lazy(() => import("./pages/shipping"));
const Login = lazy(() => import("./pages/login"));
const Orders = lazy(() => import("./pages/orders"));
const OrderDetails = lazy(() => import("./pages/order-details"));
const NotFound = lazy(() => import("./pages/not-found"));
const Checkout = lazy(() => import("./pages/checkout"));
const Category__ = lazy(() => import("./pages/Category__/Category__"));
// Admin Routes Importing
const Dashboard = lazy(() => import("./pages/admin/dashboard"));
const Products = lazy(() => import("./pages/admin/products"));
const Customers = lazy(() => import("./pages/admin/customers"));
const Transaction = lazy(() => import("./pages/admin/transaction"));
const Barcharts = lazy(() => import("./pages/admin/charts/barcharts"));
const Piecharts = lazy(() => import("./pages/admin/charts/piecharts"));
const Linecharts = lazy(() => import("./pages/admin/charts/linecharts"));
import Mobile from "./pages/Category__/Mobile";
import Grocery from "./pages/Category__/Grocery";
import Footwear from "./pages/Category__/Footwear";
import Electronic from "./pages/Category__/Electronic";
import Clothes from "./pages/Category__/Clothes";
import Books from "./pages/Category__/Books";
import Beauty from "./pages/Category__/Beauty";
import Appliances from "./pages/Category__/Appliances";
import Sports from "./pages/Category__/Sports";
const Coupon = lazy(() => import("./pages/admin/apps/coupon"));
const Stopwatch = lazy(() => import("./pages/admin/apps/stopwatch"));
const Toss = lazy(() => import("./pages/admin/apps/toss"));
const NewProduct = lazy(() => import("./pages/admin/management/newproduct"));
const ProductManagement = lazy(
  () => import("./pages/admin/management/productmanagement")
);
const TransactionManagement = lazy(
  () => import("./pages/admin/management/transactionmanagement")
);

const App = () => {
  const { user, loading } = useSelector(
    (state: RootState) => state.userReducer
  );

  const dispatch = useDispatch();

  // useEffect(() => {
  //   onAuthStateChanged(auth, async (user) => {
  //     if (user) {
  //       const data = await getUser(user.uid);
  //       console.log("Fdfds", data);
  //       dispatch(userExist(data.user));
  //     } else dispatch(userNotExist());
  //   });
  // }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const data = await getUser(user.uid);
          console.log("User data:", data);
          dispatch(userExist(data.user));
        } catch (error) {
          console.error("Error fetching user data:", error);
          // Dispatch appropriate action or handle error as needed
        }
      } else {
        dispatch(userNotExist());
      }
    });

    return () => unsubscribe(); // Cleanup function to unsubscribe from the listener
  }, [auth, dispatch]);

  return loading ? (
    <Loader />
  ) : (
    <Router>
      {/* Header */}
      <Headerr user={user} />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/cate" element={<Category__ />} />
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/mobile" element={<Mobile />} />
          <Route path="/Grocery" element={<Grocery />} />
          <Route path="/Footwear" element={<Footwear />} />
          <Route path="/Electronic" element={<Electronic />} />
          <Route path="/Clothes" element={<Clothes />} />
          <Route path="/Books" element={<Books />} />
          <Route path="/Beauty" element={<Beauty />} />
          <Route path="/Appliances" element={<Appliances />} />
          <Route path="/Sports" element={<Sports />} />
          {/* Not logged In Route */}
          <Route
            path="/login"
            element={
              <ProtectedRoute isAuthenticated={user ? false : true}>
                <Login />
              </ProtectedRoute>
            }
          />
          {/* Logged In User Routes */}
          <Route
            element={<ProtectedRoute isAuthenticated={user ? true : false} />}
          >
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/order/:id" element={<OrderDetails />} />
            <Route path="/pay" element={<Checkout />} />
          </Route>
          {/* Admin Routes */}
          <Route
            element={
              <ProtectedRoute
                isAuthenticated={true}
                adminOnly={true}
                admin={user?.role === "admin" ? true : false}
              />
            }
          >
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/product" element={<Products />} />
            <Route path="/admin/customer" element={<Customers />} />
            <Route path="/admin/transaction" element={<Transaction />} />
            {/* Charts */}
            <Route path="/admin/chart/bar" element={<Barcharts />} />
            <Route path="/admin/chart/pie" element={<Piecharts />} />
            <Route path="/admin/chart/line" element={<Linecharts />} />
            {/* Apps */}
            <Route path="/admin/app/coupon" element={<Coupon />} />
            <Route path="/admin/app/stopwatch" element={<Stopwatch />} />
            <Route path="/admin/app/toss" element={<Toss />} />

            {/* Management */}
            <Route path="/admin/product/new" element={<NewProduct />} />

            <Route path="/admin/product/:id" element={<ProductManagement />} />

            <Route
              path="/admin/transaction/:id"
              element={<TransactionManagement />}
            />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Toaster position="bottom-center" />
    </Router>
  );
};

export default App;
