import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

  const MostVotes = (props) => {
    const largest = Math.max(...props.votes)
    return (
      <div>
        {anecdotes[props.votes.indexOf(largest)]} has {largest} votes
      </div>
    )
  }

  const Votes = (props) => <div>has {props.votes} votes</div>

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
  }

  const changeAnecdote = () => () => {
    setSelected(getRandomInt(anecdotes.length))
    console.log(selected)
  }

  const vote = () => () => {
      const copy = [...votes]
      copy[selected] += 1

      console.log(votes)
      console.log(copy)

      setVotes(copy)

      console.log(votes)
      console.log(copy)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}<br></br>
      <Votes votes={votes[selected]} />
      <Button handleClick={vote()} text="vote" />
      <Button handleClick={changeAnecdote()} text="next anecdote" />
      <h2>Anecdote with most votes</h2>
      <MostVotes votes={votes} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)