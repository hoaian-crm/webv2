import React from 'react';

type CarProps = {
  branch: string;
}

type CarState = {
  color: string;
}

class Car extends React.Component<CarProps, CarState> {
  state = {
    color: 'red'
  }

  render() {
    return <h2>I'am a {this.props.branch} car and have {this.state.color} color</h2>
  }
}

class App extends React.Component {
  render() {
    return <Car branch="Ford" />
  }
}
