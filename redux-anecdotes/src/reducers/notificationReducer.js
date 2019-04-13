const reducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.notification
    case 'NULL_NOTIFICATION':
      return null
    default:
      return state
  }
}

export const setNotification = message => {
  return {
    type: 'SET_NOTIFICATION',
    notification: message
  }
}

export const nullNotification = () => {
  return {
    type: 'NULL_NOTIFICATION'
  }
}

export default reducer