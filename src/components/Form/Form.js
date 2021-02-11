import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      language: "javascript",
      textInfo: "Write something...",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    alert("The was submitted: " + this.state.name);
  }

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handleSelectChange = (e) => {
    this.setState({ language: e.target.value });
  };

  handleTextInfoChange = (e) => {
    this.setState({ textInfo: e.target.value });
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
            Pick your favorite programming language
            <select
              value={this.state.language}
              onChange={this.handleSelectChange}
            >
              <option value="javascript">Javascript</option>
              <option value="python">Python</option>
              <option value="java">Java</option>
              <option value="cpp">CPP</option>
            </select>
          </label>
          <br />
          <label>
            Comments
            <textarea
              value={this.state.textInfo}
              onChange={this.handleTextInfoChange}
            />
          </label>
          <br />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default Form;
