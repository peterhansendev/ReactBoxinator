import React from "react";
import { Component } from "react";
import { Modal } from "../../components/Modal/Modal";
import "./product.css";
import { ModalTest } from "../../components/Modal/ModalTest";
import Modaller from "../../components/Modal/Modaller";
import ShippingFee from "../../components/Shipping/Shipping";
import ShippingTimeLine from "../../components/API/ShippingTimeLine";
import FetchShipping from "../../components/API/fetchShipping";
import checkForCountries from "../../components/API/fetchShippers";

export default class Product extends Component {
  nei = {
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

  constructor() {
    super();
    this.state = {
      show: true,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div className="card">
        <div className="card-body">
        <img className="imgtest" src="/superdistinctname.jpg" alt=""></img>
          <Modaller show={this.state.show} handleClose={this.hideModal}>
          <h5 className="p-5 border-top"> {this.props.productName}</h5>
          <h1>Buy a Mystery Box today! </h1>
          
            <section>
              Customize your Mystery Box
              <ShippingFee></ShippingFee>
            </section>
          
          <button type="button" onClick={this.hideModal}>
            Buy Now
          </button>
          </Modaller>
        </div>
      </div>
    );
  }
}
