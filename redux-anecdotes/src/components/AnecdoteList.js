import React from 'react'
import { connect } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = props => {
  const vote = (anecdote) => {
    props.voteAnecdote(anecdote)
    props.setNotification(`You voted '${anecdote.content}'`, 5)
  }

  return (
    <div>
      {props.anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

const anecdotesToShow = ({ anecdotes, filter }) => {
  return anecdotes
  .filter(a => a.content.toLowerCase().includes(filter.toLowerCase()))
  .sort((a, b) => b.votes - a.votes)
}

const mapStateToProp = state => {
  return {
    anecdotes: anecdotesToShow(state),
  }
}

const mapDispatchToProps = {
  voteAnecdote,
  setNotification,
}

export default connect(mapStateToProp, mapDispatchToProps)(AnecdoteList)