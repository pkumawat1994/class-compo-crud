import React, { Component } from "react";
import "./Modal.css";
import "../App.css";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

export default class Table extends Component {
  constructor() {
    super();
    this.state = {
      data: [{ name: "rahul" }, { name: "ram" }],
      newUser: "",
      viewForm: true,
      UpdateId: "",
      MdlOpen: false,
    };
  }

  addNew = () => {
    console.log(this.state.newUser);
    const newData = this.state.newUser;
    const obj = { name: newData };
    this.state.data.push(obj);
    console.log(this.state.data);
    this.setState({ data: this.state.data, newUser: "" });
  };
  deleteItem = (id) => {
    alert(id);
    const dd = this.state.data.filter((ele, i) => id !== i);
    this.setState({ data: dd });
  };
  editItem = (bj, i) => {
    console.log(bj);
    console.log(i);

    this.setState({ viewForm: false });
    this.setState({ newUser: bj.name });
    // update for id save in state
    this.setState({ UpdateId: i });
    // console.log(this.state.newUser);
  };
  updateData = (id) => {
    console.log(this.state.data[id]);
    this.state.data[id].name = this.state.newUser;
    console.log(this.state.data[id].name);
    this.setState({ viewForm: false, newUser: "" });
  };
  changeHandler = (e) => {
    const handleData = e.target.value;
    console.log("ingData", handleData);
    this.setState({ newUser: handleData });
    console.log("setdataStat", this.state.newUser);
  };
  closeModel = () => {
    this.setState({ MdlOpen: false });
  };

  clickOpenModel = (obj, i) => {
    this.setState({ MdlOpen: true });
    console.log(obj.name);
    this.setState({ UpdateId: i });
    this.setState({ newUser: obj.name });
  };

  render() {
    return (
      <>
        <input
          type="text"
          value={this.state.newUser}
          onChange={this.changeHandler}
        />
        {this.state.viewForm ? (
          <button onClick={this.addNew}>ADD NEW</button>
        ) : (
          <button onClick={() => this.updateData(this.state.UpdateId)}>
            UPDATE DATA
          </button>
        )}
        <hr></hr>
        <h1> CLASS component CRUD </h1>
        <table style={{ border: "3px solid black" }}>
          <thead>
            <tr>
              <td>ID</td>
              <td>NAME</td>
              <td>ACTION</td>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((elem, i) => {
              return (
                <>
                  <tr
                    style={{
                      border: "3px solid black",
                      backgroundColor: "orange",
                    }}
                  >
                    <td id={i}>{i + 1}</td>
                    <td>{elem.name}</td>
                    <td>
                      <button onClick={() => this.deleteItem(i)}>DELETE</button>
                      <button onClick={() => this.editItem(elem, i)}>
                        EDIT
                      </button>
                      <button
                        value={this.state.newUser}
                        onChange={this.changeHandler}
                        onClick={() => this.clickOpenModel(elem, i)}
                      >
                        EDIT BY MODEL
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>

        <Modal open={this.state.MdlOpen} onClose={this.closeModel}>
          <div className="mdldiv">
            {" "}
            <input value={this.state.newUser} onChange={this.changeHandler} />
            <button
              className="upbtn"
              onClick={() => this.updateData(this.state.UpdateId)}
            >
              UPDATE
            </button>
          </div>
        </Modal>
      </>
    );
  }
}
