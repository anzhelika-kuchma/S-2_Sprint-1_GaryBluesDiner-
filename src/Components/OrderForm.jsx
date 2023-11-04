import React, { Component } from "react";
import FormField from "./FormField";
import OrderQt from "./OrderQt";

class OrderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      cardInfo: "",
      submitted: false,
      checkboxChecked: false,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ submitted: true });
  };

  render() {
    return (
      <div>
        {this.state.submitted ? (
          <div className="thanks-msg">
            <h3>Thanks for your order!</h3>
          </div>
        ) : (
          <form onSubmit={this.handleSubmit}>
            <div className="order-qt">
              <div>
                <OrderQt title="Eggs & Bacon" />
                <OrderQt title="French Toast" />
                <OrderQt title="Big Gary" />
                <OrderQt title="Toutons" />
                {/* <OrderQt title="Soup" /> */}
                <OrderQt title="Bagel" />
                <OrderQt title="Oatmeal" />
                <OrderQt title="Waffles" />
                <OrderQt title="Taters" />
              </div>
            </div>
            <div>
              <FormField
                title="Name"
                id="name"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
              <FormField
                title="Address"
                id="address"
                name="address"
                value={this.state.address}
                onChange={this.handleChange}
              />
              <FormField
                title="Card Info"
                id="card"
                name="cardInfo"
                value={this.state.cardInfo}
                onChange={this.handleChange}
              />
            </div>
            <button className="form-btn" type="submit">
              Submit
            </button>
          </form>
        )}
      </div>
    );
  }
}

export default OrderForm;
