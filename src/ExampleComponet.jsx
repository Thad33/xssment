import React, { Component } from 'react';

class ExampleComponent extends Component {
  constructor(props) {
    super(props);
    console.log('Constructor called.');
    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log('Component did mount.');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component did update.');
    console.log('Previous state:', prevState);
    console.log('Current state:', this.state);
  }

  componentWillUnmount() {
    console.log('Component will unmount.');
  }

  handleButtonClick = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    console.log('Render method called.');
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleButtonClick}>Increment</button>
      </div>
    );
  }
}

export default ExampleComponent;
