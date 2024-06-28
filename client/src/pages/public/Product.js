import React from "react";
import "../../assets/css/public/style.css";
import Card from "./components/Card";
import { useItemData } from "../../store/ProductData";

const Product = () => {
  const { item, addToCart } = useItemData();

  return (
    <>
      <section className="arrivals" id="arrivals" style={{ padding: "10px" }}>
        <h1 className="heading" style={{ padding: "20px" }}>
          <span>Product</span>
        </h1>
        <div className="card_section">
          {item.map((item) => (
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
              <button
                className="add-to-cart-btn"
                onClick={() => addToCart(item)}
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
