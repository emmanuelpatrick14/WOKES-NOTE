import React from 'react'

function Welcome({guest='Mr', message="Hello"}) {
  return (
    <div>
        <h2>{guest}</h2>
        <h3>{message}</h3>
    </div>
  )
}

export default Welcome
