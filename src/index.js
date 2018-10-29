import React from 'react'
import ReactDOM from 'react-dom'

const VoteCount = ({count}) => {
  let voteStr = 'votes'
  if (count === 1)
    voteStr = 'vote'

  return (
    <span>has {count} {voteStr}</span>
  )
}

const AnecdoteWithMostVotes = ({ anecdotes, votes }) => {
  const voteIndices = [...Object.keys(votes)]
  voteIndices.sort((a,b) => {
    const votesA = votes[a]
    const votesB = votes[b]
    return votesB - votesA
  })
  const anecdoteIndex = voteIndices[0]
  const voteCount = votes[anecdoteIndex]
  
  if (voteCount === 0 || !voteCount) {
    return <div></div>
  }

  return (
    <div>
      <h2>anecdote with most votes</h2>
      <p>{anecdotes[anecdoteIndex]}<br/>
        <VoteCount count={voteCount} />
      </p>  
    </div>
  )
}

  
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      votes: {}
    }
  }

  render() {
    const nextAnecdote = () => this.setState(prevState => {
      const indices = [...Array(anecdotes.length).keys()]
      indices.splice(prevState.selected, 1)
      const nextSelected = indices[Math.floor((Math.random() * indices.length))]
      return {
        selected: nextSelected
      }
    })

    const vote = () => this.setState(prevState => {
      const votes = {...prevState.votes}
      const selected = prevState.selected
      votes[selected] = (votes[selected] || 0) + 1
      return { votes }
    })

    const getVoteCount = () =>
      this.state.votes[this.state.selected] || 0

    return (
      <div>
        <p>{this.props.anecdotes[this.state.selected]}</p>
        <VoteCount count={getVoteCount()} />
        <div>
          <button onClick={vote}>vote</button>
          <button onClick={nextAnecdote}>next anecdote</button>
        </div>
        <AnecdoteWithMostVotes anecdotes={anecdotes} votes={this.state.votes} />
      </div>
    )
  }
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