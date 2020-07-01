import React, { useReducer, useEffect } from 'react'

const reducer = (state, action) => {
  switch(action.type) {
    case 'ArrowUp':
      return {...state, posY: state.posY - 10};
    case 'ArrowDown':
      return {...state, posY: state.posY + 10};
    case 'ArrowLeft':
      return {...state, posX: state.posX - 10};
    case 'ArrowRight':
      return {...state, posX: state.posX + 10};
    default:
      return state;
  }
}

const Caja = () => {
  const [state, dispatch] = useReducer(reducer, {posX: 0, posY: 0})

  const dispatchKey = (e) => {
    // console.log(e)
    dispatch({type: e.key})
  }

  useEffect(() => {
    window.addEventListener('keyup', dispatchKey)
    return () => {
      window.removeEventListener('keyup', dispatchKey)
    }
  }, [])

  const styles = {
    width: '100px',
    height: '100px',
    backgroundColor: 'yellow',
    position: 'absolute',
    top: `${state.posY}px`,
    left: `${state.posX}px`,
  }

  return (
    <div style={styles}>

    </div>
  )
}

export default Caja
