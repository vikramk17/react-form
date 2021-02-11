import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      country: "india",
      textInfo: "Write something...",
      isOk: false,
      gender: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(
      `${this.state.name}, ${this.state.email}, ${this.state.country}, ${this.state.textInfo}, ${this.state.isOk} ${this.state.gender}`
    );
  }

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handleSelectChange = (e) => {
    this.setState({ country: e.target.value });
  };

  handleTextInfoChange = (e) => {
    this.setState({ textInfo: e.target.value });
  };

  handleCheckboxChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : false;
    this.setState({ isOk: value });
  };

  handleGenderChange = (e) => {
    this.setState({ gender: e.target.value });
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">
            Username
            <input
              type="text"
              id="name"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </label>
          <br />
          <label htmlFor="email">
            Email
            <input
              type="email"
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
          </label>
          <br />
          <label>
            Select Country
            <select
              value={this.state.country}
              onChange={this.handleSelectChange}
            >
              <option value="india">India</option>
              <option value="usa">USA</option>
              <option value="japan">Japan</option>
              <option value="spain">Spain</option>
            </select>
          </label>
          <br />
          <div className="radio-buttons">
            <input
              id="male"
              value="male"
              name="gender"
              type="radio"
              onChange={this.handleGenderChange}
            />
            Male
            <input
              id="female"
              value="female"
              name="gender"
              type="radio"
              onChange={this.handleGenderChange}
            />
            Female
            <input
              id="other"
              value="other"
              name="gender"
              type="radio"
              onChange={this.handleGenderChange}
            />
            Other
          </div>
          <br />
          <label>
            Comments
            <textarea
              value={this.state.textInfo}
              onChange={this.handleTextInfoChange}
            />
          </label>
          <br />
          <label>
            Accept the privacy settings
            <input
              name="isOk"
              type="checkbox"
              checked={this.state.isOk}
              onChange={this.handleCheckboxChange}
            />
          </label>
          <br />
          <br />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default Form;
