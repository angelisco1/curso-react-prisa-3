import React from 'react'

const Meme = ({textoArriba, textoAbajo, imgUrl, color}) => {
  const styles = {
    color: color
  }

  return (
    <div>
      <p style={styles}>{textoArriba}</p>
      <img width="300px" src={imgUrl} alt="Imagen del meme"/>
      <p style={styles}>{textoAbajo}</p>
    </div>
  )
}

export default Meme
