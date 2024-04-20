import React from 'react';

class Car extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color: 'red'
    }
  }

  render() {
    return <h2>I'am a {this.props.branch} car and have {this.state.color} color</h2>
  }
}

class App extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return <Car branch="Ford" />
  }
}
