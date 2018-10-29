import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      i: 0,
      list: ['Test 1', 'Test 2', 'Test 3', 'Hihi ^^']
    };
  }

  componentDidMount() {
    setInterval(() => {
      let { i, list } = this.state;
      i = i >= list.length - 1 ? 0 : i + 1;
      this.setState({ i: i });
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.list[this.state.i]}</h1>
      </div>
    );
  }
}

export default App;
