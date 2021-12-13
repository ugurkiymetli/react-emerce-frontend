import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { Button } from "@chakra-ui/react";
function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <Button color="#000" variant="link">
            <Link to="/">Emerce</Link>
          </Button>
        </div>

        <ul className={styles.menu}>
          <li>
            <Link to="/">
              <Button variant="link">Products</Button>
            </Link>
          </li>
          <li>
            <Link to="/product-list">
              <Button variant="link">Product List</Button>
            </Link>
          </li>
          <li>
            <Link to="/categories">
              <Button variant="link">Categories</Button>
            </Link>
          </li>
          <li>
            <Link to="/users">
              <Button variant="link">Users</Button>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.right}>
        <Link to="/register">
          <Button variant="outline">Register</Button>
        </Link>
        <Link to="/login">
          <Button variant="outline">Login</Button>
        </Link>
        {/* {!isLoggedIn && (
          <>
            <Link to="/signup">
              <Button colorScheme="teal">Register</Button>
            </Link>
            <Link to="/signin">
              <Button colorScheme="teal" variant="outline">
                Login
              </Button>
            </Link>
          </>
        )} */}
        {/* {user?.role === "admin" && (
          <Link to="/admin">
            <Button colorScheme="teal" variant="ghost">
              Admin
            </Button>
          </Link>
        )} */}
        {/* {isLoggedIn && (
          <>
            {items.length > 0 && (
              <Link to="/basket">
                <Button
                  colorScheme="teal"
                  variant="outline"
                  me="2"
                  leftIcon={<MdShoppingBasket />}
                >
                  Basket ({items.length})
                </Button>
              </Link>
            )}
            <Link to="/profile">
              <Button colorScheme="teal">Profile</Button>
            </Link>
          </>
        )} */}
      </div>
    </nav>
  );
}

export default Navbar;
