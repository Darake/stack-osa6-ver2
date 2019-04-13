import anecdoteService from '../services/anecdotes'

const reducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch (action.type) {
    case 'UPDATE_ANECDOTE':
      return state.map(anecdote => 
        anecdote.id !== action.data.id ? anecdote : action.data
      )
    case 'NEW_ANECDOTE':
        return [...state, action.data]
    case 'INITIALIZE':
        return action.data
    default:
      return state
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INITIALIZE',
      data: anecdotes
    })
  }
}

export const voteAnecdote = anecdote => {
  const newAnecdote = {...anecdote, votes: anecdote.votes + 1}
  return async dispatch => {
    const updatedAnecdote = await anecdoteService.update(anecdote.id, newAnecdote)
    dispatch({
      type: 'UPDATE_ANECDOTE',
      data: updatedAnecdote
    })
  }
}

export const newAnecdote = content => {
  const anecdoteObject = {
    content,
    votes: 0
  }
  
  return async dispatch => {
    const anecdote = await anecdoteService.createNew(anecdoteObject)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: anecdote
    })
  } 
}

export default reducer