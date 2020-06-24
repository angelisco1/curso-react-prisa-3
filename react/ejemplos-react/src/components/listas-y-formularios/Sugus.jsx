import React from 'react'

const Sugus = (props) => {
  const styles = {
    width: '200px',
    height: '200px',
    backgroundColor: props.color
  }

  return (
    <div style={styles}>
      {props.sabor}
    </div>
  )
}

export default Sugus
