import React from 'react';

const Notification = props => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  const message = props.store.getState().notification

  if (message === null) return null

  return (
    <div style={style}>
      {props.store.getState().notification}
    </div>
  )
}

export default Notification
