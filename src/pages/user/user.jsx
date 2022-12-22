import React, { useState, Component } from "react";
import Product from "./product";
import "./product.css";
import ShippingFee from "../../components/Shipping/Shipping";
import FetchShipping from "../../components/API/fetchShipping";
import ShippingTimeLine from "../../components/API/ShippingTimeLine";
import ShippingInfo from "./shippingInfo";

export default class productsList extends Component {
  state = {
    clicked: false,
    products: [
      {
        id: 1,
        name: "Basic Tier",
        description: 1,
        price: 200,
        img: "/BasicTier.jpg",
      },
      { id: 2, name: "Humble Tier", description: 2, img: "/HumbleTier.jpg" },
      { id: 3, name: "Deluxe Tier", description: 5, img: "/DeluxeTier.jpg" },
      { id: 4, name: "Premium Tier", description: 8, img: "/PremiumTier.jpg" },
      { id: 5, name: "For testing", description: 99, img: "none" },
    ],
  };

  render() {
    console.log(this.state.clicked);
    return (
      <div>
        <h4 className="TitleShipping">Shipping Information</h4>
        <ShippingInfo />

        <button
          onClick={() =>
            this.setState({ clicked: true }) && console.log(this.state.clicked)
          }
        >
          Add new shipment
        </button>

        {this.state.clicked ? (
          <div>
            {this.state.products.map((prod) => {
              return (
                <Product
                  key={prod.id}
                  id={prod.id}
                  productName={prod.name}
                  img={prod.img}
                />
              );
            })}
          </div>
        ) : null}
      </div>
    );
  }
}
