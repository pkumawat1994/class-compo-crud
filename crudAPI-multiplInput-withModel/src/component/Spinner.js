import React, { Component } from "react";
import RotateLoader from "react-spinners/RotateLoader";

export default class Spinner extends Component {
  constructor() {
    super();
    this.state = {
      load: false,
    };
  }

  componentDidMount() {
    this.setState({ load: true });
    setTimeout(() => {
      this.setState({ load: false });
    }, 2000);
  }

  render() {
    return (
      <>
        {this.state.load ? (
          <RotateLoader loading={this.state.load} />
        ) : (
          <h1>Spinner</h1>
        )}
      </>
    );
  }
}
