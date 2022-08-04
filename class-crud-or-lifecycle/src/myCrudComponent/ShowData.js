import React from "react";

import { Button, Table } from "react-bootstrap";
export default class ShowData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewForm: true,
    };
  }

  render() {
    console.log(5555555, this.props.users);
    return (
      <>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {this.props.users?.map((item, index) => {
              return (
                <>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => {
                          this.props.delete(index);
                        }}
                      >
                        DELETE
                      </Button>

                      <Button
                        variant="success"
                        onClick={() => {
                          this.props.edit(index);
                        }}
                        // this.props.edit(this.state.data.name, this.state.data.id)
                      >
                        EDIT
                      </Button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </Table>
      </>
    );
  }
}
