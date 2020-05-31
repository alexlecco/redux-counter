import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../App.css';

class Counter extends Component {
  constructor(props) {
    super(props)
    this.incrementIfOdd = this.incrementIfOdd.bind(this)
    this.incrementAsync = this.incrementAsync.bind(this)
  }

  incrementIfOdd() {
    if (this.props.value % 2 !== 0) {
      this.props.onIncrement()
    }
  }

  incrementAsync() {
    setTimeout(this.props.onIncrement, 1000)
  }

  render() {
    const { value, onIncrement, onDecrement } = this.props

    return(
      <div className="App">
        <header className="App-header">
          <p>
            Clicked: {value} times
            {' '}
            <button onClick={onIncrement}> + </button>
            {' '}
            <button onClick={onDecrement}> - </button>
            {' '}
            <button onClick={this.incrementIfOdd}> Increment if odd </button>
            {' '}
            <button onClick={this.incrementAsync}> Increment async </button>
            {' '}
          </p>
        </header>
      </div>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default Counter