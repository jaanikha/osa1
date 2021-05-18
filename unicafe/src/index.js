import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = props => <tr><td>{props.name}</td><td>{props.value} {props.merkki}</td></tr>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticsLine = ({text, value, merkki}) => (
<Display value={value} name={text} merkki={merkki}/>
)

const Statistics = ({good, neutral, bad}) => (
  <table><tbody>
  <StatisticsLine text={'good'} value={good} />
  <StatisticsLine text={'neutral'} value={neutral} />
  <StatisticsLine text={'bad'} value={bad} />
  <StatisticsLine text={'all'} value={good + neutral + bad} />
  <StatisticsLine text={'average'} value={good - bad} />
  <StatisticsLine text={'positive'} value={100 * good / (good + neutral + bad)} merkki={'%'}/>
  </tbody></table>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setGoodValue = () => () => {
    setGood(good + 1)
  }

  const setNeutralValue = () => () => {
    setNeutral(neutral + 1)
  }

  const setBadValue = () => () => {
    setBad(bad + 1)
  }

  if (good + neutral + bad != 0) {
    return (
      <div>
        <h1>give feedback</h1>
        <Button handleClick={setGoodValue()} text="good" />
        <Button handleClick={setNeutralValue()} text="neutral" />
        <Button handleClick={setBadValue()} text="bad" />
        <h2>statistics</h2>
        <Statistics good={good} neutral={neutral} bad={bad}/>
      </div>
    )
  }
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={setGoodValue()} text="good" />
      <Button handleClick={setNeutralValue()} text="neutral" />
      <Button handleClick={setBadValue()} text="bad" />
      <h2>statistics</h2>
      <p>No feedback given</p>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)