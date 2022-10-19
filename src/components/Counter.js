import React, { Component } from 'react'

export default class Counter extends Component {
  constructor() {
    super();

    this.currentCounter = 2;
  }

  render() {
    return (
      <div>
        <button
          className="waves-effect
        waves-light btn red darken-4"
        >
          -
        </button>
        <sapn>{this.currentCounter}</sapn>
        <button className="waves-effect
        waves-light btn green darken-4"
        >
          +
        </button>
      </div>
    )
  }
}
