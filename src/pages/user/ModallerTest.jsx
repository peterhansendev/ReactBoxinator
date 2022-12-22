import React, { Component } from "react";
import Modaller from  "../../components/Modal/Modaller";

export default class ModallerTest extends Component {
  constructor() {
    super();
    this.state = {
      show: false
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
      <div>
        
        <Modaller show={this.state.show} handleClose={this.hideModal}>
          <p>Modal</p>
          <h1> Test</h1>
          
              
        </Modaller>
        <button type="button" onClick={this.showModal}>
          Open
        </button>
      </div>
    );
  }
}
