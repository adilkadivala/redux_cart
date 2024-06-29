import React, { useEffect } from "react";
import "../../assets/css/public/style.css";
import Card from "./components/Card";

// redux
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../store/slices/addToCart/productSlice"; // Adjust the path according to your folder structure
import { addToCart } from "../../store/slices/addToCart/cart"; // Adjust the path according to your folder structure

const Product = () => {
  // const { item, addToCart } = useItemData(); context api

  // redux
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <>
      <section className="arrivals" id="arrivals" style={{ padding: "10px" }}>
        <h1 className="heading" style={{ padding: "20px" }}>
          <span>Product</span>
        </h1>
        <div className="card_section">
          {/* {item.map((item) => (   */}
          {products.map((item) => (
            <Card key={item.id} title={item.title}>
              <img
                src={`uploads/${item.image}`}
                alt="Card_banner"
                className="card-img"
              />
              <div className="disc">
                <p className="item-name">product = {item.title}</p>
                <p className="item-price">price = {item.price}</p>
              </div>

              {/* context */}
              {/* <button
                className="add-to-cart-btn"
                onClick={() => addToCart(item)}
              >
                Add to cart
              </button> */}

              {/* redux */}
              <button
                className="add-to-cart-btn"
                onClick={() => handleAddToCart(item)}
              >
                Add to cart
              </button>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default Product;
