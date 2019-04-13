import React from 'react'
import { connect } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, nullNotification } from '../reducers/notificationReducer'

const AnecdoteList = props => {
  const vote = (anecdote) => {
    props.voteAnecdote(anecdote.id)
    notify(`You voted '${anecdote.content}'`)
  }

  const notify = message => {
    props.setNotification(message)
    setTimeout(() => props.nullNotification(), 5000)
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
    filter: state.filter
  }
}

const mapDispatchToProps = {
  voteAnecdote,
  setNotification,
  nullNotification
}

export default connect(mapStateToProp, mapDispatchToProps)(AnecdoteList)