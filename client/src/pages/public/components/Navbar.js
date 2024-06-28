import React, { useState } from "react";
import "../../../assets/css/public/style.css";
import { NavLink } from "react-router-dom";
import { useItemData } from "../../../store/ProductData";

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart, removeFromCart } = useItemData();

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <header className="header">
        <div className="header-1">
          <NavLink to="" className="logo">
            <i className="fas fa-shopping-cart"></i> Add to Cart
          </NavLink>

          <div className="icons">
            <button
              style={{
                background: "none",
                fontSize: "2rem",
                cursor: "pointer",
              }}
            >
              <span className="fas fa-shopping-cart" onClick={handleCartClick}>
                {cart.length > 0 && (
                  <span className="cart-count">{cart.length}</span>
                )}
              </span>
            </button>
          </div>
        </div>
      </header>
      {isCartOpen && (
        <div className="cart-drawer">
          <div className="cart-drawer-content">
            <button className="close-btn" onClick={handleCartClick}>
              Close
            </button>
            <h2>Your Cart</h2>
            <div>
              <div>
                <div>
                  <h3>Recent Orders</h3>
                </div>
                <br />

                <table style={{ border: "1px solid grey", width: "90%" }}>
                  <thead>
                    <tr>
                      <th>Product Image</th>
                      <th>Product Name</th>
                      <th>Product Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody style={{ border: "1px solid dark" }}>
                    {cart.map((item) => (
                      <>
                        <tr key={item.id} style={{ textAlign: "center" }}>
                          <td>
                            <img
                              src={`/uploads/${item.image}`}
                              alt="item banner"
                              width={50}
                            />
                          </td>
                          <td>
                            <p>{item.title}</p>
                          </td>
                          <td>
                            <p>{item.price}</p>
                          </td>
                          <td>
                            <button
                              style={{
                                backgroundColor: "red",
                                padding: "0.8rem 0.5rem",
                                borderRadius: "0.5rem",
                                color: "#fff",
                                cursor: "pointerF",
                              }}
                              onClick={() => removeFromCart(item.id)}
                            >
                              Remove
                            </button>
                          </td>
                        </tr>
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
