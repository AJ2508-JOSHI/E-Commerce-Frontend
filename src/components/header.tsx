import { Link } from "react-router-dom";
import {
  FaSearch,
  FaShoppingBag,
  FaSignInAlt,
  FaUser,
  FaSignOutAlt,
  FaHome,
} from "react-icons/fa";
import { useState } from "react";
import { User } from "../types/types";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import toast from "react-hot-toast";

interface PropsType {
  user: User | null;
}

const Header = ({ user }: PropsType) => {
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

  return (
    <nav className="header">
      {/* logo */}
      <div className="logo" style={{ justifySelf: "flex-start" }}>
        <h2>
          <span>S</span>hop
          <span>
            <span>A</span>
          </span>
          ll
        </h2>
      </div>

      <div className="nav__item" style={{ justifySelf: "center" }}>
        <Link onClick={() => setIsOpen(false)} to={"/"}>
          <FaHome size={30} />
        </Link>
      </div>

      <div className="nav__item" style={{ justifySelf: "flex-end" }}>
        <Link onClick={() => setIsOpen(false)} to={"/search"}>
          <div
            style={{
              width: 650,
              height: 50,
              backgroundColor: "#fff",
              borderRadius: 5,
              display: "flex",
              alignItems: "center",
              padding: 10,
            }}
          >
            <FaSearch />
          </div>
        </Link>
      </div>

      <div className="nav__item">
        <Link onClick={() => setIsOpen(false)} to={"/cart"}>
          <FaShoppingBag size={25} />
        </Link>
      </div>

      {user?._id ? (
        <>
          <button onClick={() => setIsOpen((prev) => !prev)}>
            <FaUser size={25} />
          </button>
          <dialog open={isOpen}>
            <div>
              {user.role === "admin" && (
                <Link onClick={() => setIsOpen(false)} to="/admin/dashboard">
                  Admin
                </Link>
              )}

              <Link onClick={() => setIsOpen(false)} to="/orders">
                Orders
              </Link>
              <button onClick={logoutHandler}>
                <FaSignOutAlt />
              </button>
            </div>
          </dialog>
        </>
      ) : (
        <Link to={"/login"}>
          <FaSignInAlt />
        </Link>
      )}
    </nav>
  );
};

export default Header;
