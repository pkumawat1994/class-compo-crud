import React from "react";
import { Button, Table } from "react-bootstrap";
import ShowData from "./ShowData";

export default class Userlist extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      newUser: "",
      viewForm: true,
      id: null,
    };
    // All my function bind BCZ my all function not arrow function
    this.handleChange = this.handleChange.bind(this);
    this.Addnew = this.Addnew.bind(this);
    this.removeItem = this.removeItem.bind(this);
    //this.editItem = this.editItem.bind(this);

    this.updateData = this.updateData.bind(this);
    console.log(this.state.users);
  }
  //handle change call two time first time change value and second time edit value then call function
  handleChange(e) {
    console.log(e.target.value);
    this.setState({ newUser: e.target.value });
  }

  Addnew = (e) => {
    e.preventDefault();

    const data = {
      name: this.state.newUser,
    };

    this.state.users.push(data);
    this.setState({ users: this.state.users, newUser: "" });
    console.log(this.state.users);

    //ADD KARNE KA SECOND ATRIKA   with ID -------------------------------------
    //  const id = this.state.getPost.length + 1;
    //  console.log(4444, id);
    //  let newPost = {};
    //  newPost.id = id;
    //  newPost.name = this.state.newTitle;
    //  this.state.getPost.push(newPost);
    //  console.log(newPost);
    //  this.setState({ getPost: this.state.getPost });
  };
  editData = (i) => {
    // console.log(this.state.users[i]);
    this.setState({
      newUser: this.state.users[i].name,
      viewForm: false,
      id: i,
    });
  };
  removeItem(id) {
    alert(id);

    const filtered = this.state.users.filter((el, i) => i !== id);
    console.log("us", filtered);
    this.setState({ users: filtered });
  }

  updateData() {
    // console.log(this.state.id);
    // console.log(this.state.users[this.state.id]);
    const data = {
      name: this.state.newUser,
    };
    this.state.users.splice(this.state.id, 1, data);
    this.setState({ users: this.state.users, viewForm: true, newUser: "" });

    // SECOND TARIKA UPDATAE KARNE KA ----------------------------------
    //   console.log(343433, id, title);
    //   const updatePost = this.state.getPost.find((item) => item.id == id);
    //   updatePost.name = title;
    //   const filterPost = this.state.getPost.filter((item) => {
    //     if (item.id == id) {
    //       return updatePost;
    //     } else {
    //       return item;
    //     }
    //   });
    //   this.setState({ getPost: filterPost });
    // }
  }

  render() {
    return (
      <>
        {console.log(" render calll")}
        <center>
          <h1 style={{ margin: "10px" }}>my userlist</h1>

          <>
            {" "}
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.newUser}
            />{" "}
            {this.state.viewForm ? (
              <Button onClick={this.Addnew}>add new</Button>
            ) : (
              <Button variant="warning" onClick={() => this.updateData()}>
                UPDATE
              </Button>
            )}{" "}
          </>

          <ShowData
            users={this.state.users}
            delete={this.removeItem}
            edit={this.editData}
          />
        </center>
      </>
    );
  }
}
