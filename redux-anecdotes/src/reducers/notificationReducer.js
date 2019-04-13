const reducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.data
    case 'NULL_NOTIFICATION':
      return null
    default:
      return state
  }
}

export const setNotification = (message, ms) => {
  const seconds = ms * 1000
  return async dispatch => {
    dispatch({
      type: 'SET_NOTIFICATION',
      data: message
    })
    setTimeout(() => {
      dispatch({
        type: 'NULL_NOTIFICATION'
      })
    }, seconds)
  }
}

export default reducer