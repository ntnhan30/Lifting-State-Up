// jshint ignore: start
import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <A />
      </div>
    );
  }
}

class A extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { x: 0 };
  }

  handleClick() {
    console.log("this.state.x", typeof this.state.x);
    let newValue = this.state.x + 1;
    this.setState({ x: newValue });
  }

  render() {
    return (
      <div className="A border">
        <h1>Component A</h1>
        <button onClick={e => this.handleClick(e)}>Click</button>
        <p>{this.state.x}</p>
        <B x={this.state.x} onXClick={this.handleClick}>
          {" "}
        </B>
        <D x={this.state.x} onXClick={this.handleClick}>
          {" "}
        </D>
      </div>
    );
  }
}

class B extends Component {
  render() {
    return (
      <div className="B border">
        <h1>Component B</h1>
        <p>{this.props.x}</p>
        <C x={this.props.x} onXClick={this.props.onXClick}>
          {" "}
        </C>
        {/* <button onClick={e => this.handleClick(e)}>Click</button> */}
      </div>
    );
  }
}

class C extends Component {
  render() {
    return (
      <div className="C border">
        <h1>Component C</h1>
        <button onClick={this.props.onXClick}>{this.props.x}</button>
        <p>{this.props.x}</p>
      </div>
    );
  }
}

class D extends Component {
  render() {
    return (
      <div className="D border">
        <h1>Component D</h1>
        <button onClick={this.props.onXClick}>{this.props.x}</button>
        <p>{this.props.x}</p>
      </div>
    );
  }
}
export default App;
