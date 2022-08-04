import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default class Toastify extends Component {
  constructor() {
    super();
  }
  openToast = () => {
    toast.success("🦄 Wow so easy!", {
      position: "top-center",
      autoClose: 5000,
      theme: "colored",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  render() {
    return (
      <>
        <h1>Toastify</h1>
        <button onClick={this.openToast}>Open Toastyfy</button>
        <ToastContainer />
      </>
    );
  }
}
