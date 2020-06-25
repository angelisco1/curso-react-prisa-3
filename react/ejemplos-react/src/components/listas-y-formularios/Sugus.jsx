import React from 'react'

// const Sugus = ({ item }) => {
const Sugus = ({ color, sabor }) => {
  const styles = {
    width: '200px',
    height: '200px',
    // backgroundColor: item.color
    backgroundColor: color
  }

  return (
    <div style={styles}>
      {/* {item.sabor} */}
      {sabor}
    </div>
  )
}

export default Sugus
