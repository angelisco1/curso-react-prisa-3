import React from 'react'

const Error = () => {
  const styles = {
    color: 'red'
  }
  
  return (
    <div>
      <marquee behavior="alternate">
        <h1 style={styles}>ERROR: Page not found</h1>
      </marquee>
    </div>
  )
}

export default Error
