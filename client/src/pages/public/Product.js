import React from "react";
import "../../assets/css/public/style.css";
import Card from "./components/Card";
import { useItemData } from "../../store/ProductData";

const Product = () => {
  const { item } = useItemData();

  return (
    <>
      <section className="arrivals" id="arrivals" style={{ padding: "10px" }}>
        <h1 className="heading" style={{ padding: "20px" }}>
          <span>Product </span>
        </h1>
        <div className="card_section">
          {item &&
            item.map((product) => {
              return (
                <Card key={product.id}>
                  <img src={`/uploads/${product.image}`} alt="Card_banner" />
                 
                  <div className="disc">
                    <p>name {product.title}</p>
                    <p>price {product.price}</p>
                  </div>
                  <button>Add to cart</button>
                </Card>
              );
            })}
        </div>
      </section>
    </>
  );
};

export default Product;
