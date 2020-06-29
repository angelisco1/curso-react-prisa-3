import React from 'react'

const Card = ({ children }) => {
  return (
    <div style={{width: '300px', textAlign: 'center'}}>
      <div style={{backgroundColor: 'lightgray'}}>
        {children[0]}
      </div>
      <hr/>
      {children[1]}
      {children[2]}
    </div>
  )
}

export default Card