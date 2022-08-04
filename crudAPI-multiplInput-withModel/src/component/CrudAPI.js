import Button from "react-bootstrap/Button";
import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import RotateLoader from "react-spinners/RotateLoader";

export default class CrudAPI extends Component {
  constructor() {
    super();
    this.state = {
      getData: [],
      status: false,
      isLoader: false,
      name: "",
      avatar: "",
      editView: false,
      img: false,
      imgURL: "",
      updateId: "",
    };
  }

  componentDidMount() {
    this.setState({ isLoader: true });
    fetch("https://62c5649ea361f7251282c8ac.mockapi.io/text")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.setState({ getData: res });
        this.setState({ isLoader: false });
      });
  }

  deleteItem = (id) => {
    this.setState({ updateId: id });
    console.log(id);
    fetch(`https://62c5649ea361f7251282c8ac.mockapi.io/text/${id}`, {
      method: "DELETE",
    }).then((res) => res.json());
    let returnData = this.state.getData.filter((data) => data.id != id);
    console.log(returnData);
    this.setState({ getData: returnData });

    // .then((ress) => this.state.getData.filter((data)=>data.id!=ress.id)).then((res)=>this.setState({getData:res}));
    // const data = this.state.getData.filter((data) => data.id !== id);
    // this.setState({ getData: data });
  };
  myFormData = (e) => {
    e.preventDefault();

    console.log(this.state.avatar.name);
    const obj = {
      name: this.state.name,
      avatar: this.state.avatar.name,
    };
    console.log(obj);
    console.log("before", this.state.getData);

    fetch("https://62c5649ea361f7251282c8ac.mockapi.io/text", {
      method: "post",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((res) => res.json())
      .then((res) => this.state.getData.push(res))
      .then(() => this.setState({ getData: this.state.getData, name: "" }));
    console.log("123", this.state.getData);
  };

  editDATA = (id) => {
    alert(id);
    this.setState({ editView: true, img: true, updateId: id });

    fetch(`https://62c5649ea361f7251282c8ac.mockapi.io/text/${id}`)
      .then((res) => res.json())
      .then((res) => this.setState({ name: res.name, imgURL: res.avatar }));

    //WITHOUT API GET DATA FROM STATE-------------------

    // let myRData = this.state.getData.filter((elem) => elem.id == id);
    // console.log(myRData);
    // console.log(myRData[0].name);
    // this.setState({ name: myRData[0].name });
    // console.log(this.state.name);
  };
  updateData = (e) => {
    e.preventDefault();
    console.log(this.state.updateId);
    const obj = {
      name: this.state.name,
      avatar: "https://random.imagecdn.app/500/150",
    };
    const data = {
      method: "Put",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(obj),
    };
    console.log("before update", this.state.getData);
    fetch(
      `https://62c5649ea361f7251282c8ac.mockapi.io/text/${this.state.updateId}`,
      data
    ).then((res) => res.json());
    const dtaa = this.state.getData.find(
      (obj) => obj.id == this.state.updateId
    );

    console.log(dtaa);
    dtaa.name = this.state.name;
    dtaa.avatar = "https://random.imagecdn.app/500/150";
    this.setState({ getData: this.state.getData, img: false, name: "" });
  };
  render() {
    return (
      <>
        <hr></hr>
        <h1>CRUD WITH API</h1>
        <center>
          <form onSubmit={this.myFormData}>
            <div className="myd">
              <lable>ENTER YOUR NAME</lable>{" "}
              <input
                type="text"
                value={this.state.name}
                onChange={(e) => {
                  this.setState({ name: e.target.value });
                }}
              />
              <br />
              <lable>SELECT IMAGE</lable>{" "}
              <input
                onChange={(e) => {
                  console.log(e);
                  this.setState({
                    avatar: e.target.files[0],
                  });
                }}
                type="file"
              />
              {this.state.img ? (
                <>
                  {" "}
                  <h1 className="editDIV">
                    <h6>YOU WANT TO CHANGE THIS IMAGE</h6>
                    <img src={this.state.imgURL} alt="a" />
                    <h6>PLEASE UPLOAD NEW PICTURE</h6>
                  </h1>{" "}
                </>
              ) : (
                ""
              )}
              <br />
              <br />
              {this.state.editView ? (
                <Button
                  onClick={(e) => this.updateData(e)}
                  variant="success"
                  type="submit"
                >
                  UPDATE
                </Button>
              ) : (
                <Button variant="success" type="submit">
                  SUBMIT
                </Button>
              )}
              <hr />
            </div>
          </form>
        </center>

        <table class="table table-dark">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">NAME</th>
              <th scope="col">IMAGE</th>
              <th scope="col">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {this.state.getData && this.state.getData.length > 0 ? (
              this.state.getData.map((elem, i) => {
                return (
                  <>
                    {}
                    <tr>
                      <td>{elem.id}</td>
                      <td>{elem.name}</td>

                      <td>
                        <img className="myproductName" src={elem.avatar} />
                      </td>

                      <td>
                        <Button
                          onClick={() => this.deleteItem(elem.id)}
                          variant="danger"
                        >
                          DELETE
                        </Button>
                        <Button
                          onClick={() => {
                            this.editDATA(elem.id);
                          }}
                          variant="warning"
                        >
                          EDIT
                        </Button>
                      </td>
                    </tr>
                  </>
                );
              })
            ) : (
              <RotateLoader loading={this.state.load} />
            )}
          </tbody>
        </table>
      </>
    );
  }
}
