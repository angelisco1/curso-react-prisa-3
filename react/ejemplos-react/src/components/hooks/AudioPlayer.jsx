import React, { useRef, useState, useEffect } from 'react'

const AudioPlayer = () => {

  const audioR = useRef(null);
  const [volumen, setVolumen] = useState(100)

  useEffect(() => {
    setVolumen(audioR.current.volume * 100)
  }, [audioR])

  const cambiaVolumen = (e) => {
    audioR.current.volume = e.target.value / 100;
    // TODO: No cambia por el audioR
  }

  const play = () => {
    console.log('Play')
    audioR.current.play()
  }

  const pause = () => {
    console.log('Pause')
    audioR.current.pause()
  }

  return (
    <div>
      <audio id="a1" ref={audioR} src="/assets/carrusel-deportivo.mp3"></audio>
      <button type="button" onClick={play}>Play</button>
      <button type="button" onClick={pause}>Pause</button>
      <input type="range" min="0" max="100" step="1" value={volumen / 100} onChange={cambiaVolumen} />
    </div>
  )
}

export default AudioPlayer
