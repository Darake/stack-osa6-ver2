import React from 'react'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, nullNotification } from '../reducers/notificationReducer'

const AnecdoteList = props => {
  const store = props.store
  const anecdotes = store.getState().anecdotes
    .filter(a => a.content.toLowerCase().includes(store.getState().filter.toLowerCase()))
    .sort((a, b) => b.votes - a.votes)

  const vote = (anecdote) => {
    store.dispatch(voteAnecdote(anecdote.id))
    notify(`You voted '${anecdote.content}'`)
  }

  const notify = message => {
    store.dispatch(setNotification(message))
    setTimeout(() => store.dispatch(nullNotification()), 5000)
  }

  return (
    <div>
      {anecdotes.map(anecdote =>
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

export default AnecdoteList