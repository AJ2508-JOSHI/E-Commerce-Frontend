import React, { useState } from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaShoppingBag,
  FaSignInAlt,
  FaUser,
  FaSignOutAlt,
  FaHome,
} from "react-icons/fa";
import { User } from "../types/types";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import toast from "react-hot-toast";
import { GiCancel, GiHamburgerMenu } from "react-icons/gi";
interface PropsType {
  user: User | null;
}

const Headerr = ({ user }: PropsType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const logoutHandler = async () => {
    try {
      await signOut(auth);
      toast.success("Sign Out Successfully");
      setIsOpen(false);
    } catch (error) {
      toast.error("Sign Out Fail");
    }
  };
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav" style={{ marginBottom: 20 }}>
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>S</span>hop
            <span>
              <span>A</span>
            </span>
            ll
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <Link className="text" onClick={() => setIsOpen(false)} to={"/"}>
                <FaHome size={30} />
              </Link>
            </li>
            <li>
              <Link onClick={() => setIsOpen(false)} to={"/search"}>
                <div className="nav__search">
                  <FaSearch />
                </div>
              </Link>
            </li>
            <div className="nav__right">
              <li>
                <Link
                  className="text"
                  onClick={() => setIsOpen(false)}
                  to={"/cart"}
                >
                  <FaShoppingBag size={25} />
                </Link>
              </li>

              <li>
                {user?._id ? (
                  <>
                    <button
                      className="text"
                      onClick={() => setIsOpen((prev) => !prev)}
                    >
                      <FaUser size={25} />
                    </button>
                    <dialog open={isOpen}>
                      <div>
                        {user.role === "admin" && (
                          <Link
                            className="text"
                            onClick={() => setIsOpen(false)}
                            to="/admin/dashboard"
                          >
                            Admin
                          </Link>
                        )}

                        <Link
                          className="text"
                          onClick={() => setIsOpen(false)}
                          to="/orders"
                        >
                          Orders
                        </Link>
                        <button className="text" onClick={logoutHandler}>
                          <FaSignOutAlt />
                        </button>
                      </div>
                    </dialog>
                  </>
                ) : (
                  <Link className="text" to={"/login"}>
                    <FaSignInAlt />
                  </Link>
                )}
              </li>
            </div>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          {/* hamburget menu start  */}

          <div
            style={{
              marginTop: 20,
            }}
            className="hamburger-menu"
          >
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              {showMediaIcons ? <GiCancel /> : <GiHamburgerMenu />}
            </a>
          </div>
        </div>
      </nav>

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
    </>
  );
};

export default Headerr;
