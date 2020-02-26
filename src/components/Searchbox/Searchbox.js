import React, { Component } from "react";
import propTypes from "prop-types";

export default class Searchbox extends Component {
  state = {
    value: ""
  };

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.value !== "") {
      this.props.onSubmit(this.state.value);
      this.setState({ value: "" });
    }
  };

  render() {
    const { value } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={value} onChange={this.handleChange} />

        <button type="submit">Search</button>
      </form>
    );
  }
}

Searchbox.propTypes={
  onSubmit: propTypes.func.isRequired
}