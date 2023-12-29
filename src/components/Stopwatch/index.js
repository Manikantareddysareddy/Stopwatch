import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {minNum: 0, secNum: 0}

  timerStart = () => {
    this.timerId = setInterval(this.increaseSec, 1000)
  }

  timerStop = () => {
    clearInterval(this.timerId)
    this.setState(prevState => ({
      minNum: prevState.minNum,
      secNum: prevState.secNum,
    }))
  }

  timerReset = () => {
    clearInterval(this.timerId)
    this.setState({minNum: 0, secNum: 0})
  }

  increaseSec = () => {
    const {secNum, minNum} = this.state
    if (secNum === 59) {
      this.setState({minNum: minNum + 1, secNum: 0})
    }
    this.setState(prevState => ({secNum: prevState.secNum + 1}))
  }

  render() {
    const {minNum, secNum} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="sub-card-container">
            <div className="image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="image"
              />
              <p className="image-para">Timer</p>
            </div>
            <h1 className="time">
              {minNum > 9 ? minNum : `0${minNum}`}:
              {secNum > 9 ? secNum : `0${secNum}`}
            </h1>
            <div className="btn-container">
              <button
                type="button"
                className="start-btn"
                onClick={this.timerStart}
              >
                Start
              </button>
              <button
                type="button"
                className="stop-btn"
                onClick={this.timerStop}
              >
                Stop
              </button>
              <button
                type="button"
                className="reset-btn"
                onClick={this.timerReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
