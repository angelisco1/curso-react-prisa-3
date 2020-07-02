import React, { useRef, useState, useEffect } from 'react'

const AudioPlayer = () => {
  const audioR = useRef(null);
  const [volumen, setVolumen] = useState(100)

  useEffect(() => {
    console.log('useEffect')
    if (audioR) {
      audioR.current.volume = volumen / 100;
    }
  }, [volumen])

  const cambiaVolumen = (e) => {
    console.log('Pasa', e.target.value)
    setVolumen(e.target.value)
  }

  // useEffect(() => {
  //   console.log('useEffect')
  //   setVolumen(audioR.current.volume * 100)
  // }, [audioR])

  // const cambiaVolumen = (e) => {
  //   console.log('Pasa', e.target.value)
  //   audioR.current.volume = e.target.value / 100;
  //   // TODO: No cambia por el audioR
  // }

  const play = () => {
    console.log('Play')
    audioR.current.play()
  }

  const pause = () => {
    console.log('Pausa', audioR.current.volume, volumen)
    console.log('Pause')
    audioR.current.pause()
  }

  return (
    <div>
      <audio id="a1" ref={audioR} src="/assets/carrusel-deportivo.mp3"></audio>
      <button type="button" onClick={play}>Play</button>
      <button type="button" onClick={pause}>Pause</button>
      <input type="range" min="0" max="100" value={volumen} onChange={cambiaVolumen} />
    </div>
  )
}

export default AudioPlayer
