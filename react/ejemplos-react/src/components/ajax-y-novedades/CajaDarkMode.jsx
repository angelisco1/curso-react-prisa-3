import React from 'react'
import { withDarkMode } from './withDarkMode'


const CajaDarkMode = ({darkMode}) => {
  const styles = darkMode
    ?
      {color: 'white', backgroundColor: 'black'}
    :
      {color: 'black', backgroundColor: 'white'};

  return (
    <div style={styles}>
      <p>Un texto</p>
    </div>
  )
}

export default withDarkMode(CajaDarkMode)
// const nuevoCmp = withLoQueSea(CMP)
