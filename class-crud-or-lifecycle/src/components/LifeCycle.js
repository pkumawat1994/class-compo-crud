import React from "react";
export default class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: props.name,
    };
    console.log("constructor", this.state.count);
  }

  componentDidMount() {
    console.log("component did mount", this.state.count);
  }
  componentDidUpdate() {
    console.log("component did update call");
  }
  shouldComponentUpdate() {
    console.log("should component update");
    return true;
  }

  static getDerivedStateFromProps() {
    console.log("GDSFP");
  }
  getSnapshotBeforeUpdate(preprops, preState) {
    console.log("getsnapshotbeforeupdate", preState);
    console.log("getsnapshotbeforeupdate", preprops);
    return null;
  }
  render() {
    console.log("render");
    return (
      <>
        <br />
        <br />
        <br />
        <h1>-----------COMPONENT LIFE CYCLE-----------</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          click the name Change{this.state.count}
        </button>
        <h1>
          The count is <button>{this.state.count} </button>
        </h1>
      </>
    );
  }
}
