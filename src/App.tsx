import React from 'react'
import './App.css'
import { AudioClip } from './audioclip'
import Drum from "./drum"

//Arreglo de tipo interfaz AudioClip con todos los sonidos a reproducir
const audioClips: AudioClip[] = [
  {
    key: "Q",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    description: "Heater 1"
  },
  {
    key: "W",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    description: "Heater 2"
  },
  {
    key: "E",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    description: "Heater 3"
  },
  {
    key: "A",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    description: "Heater 4"
  },
  {
    key: "S",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    description: "Clap"
  },
  {
    key: "D",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    description: "Open HH"
  },
  {
    key: "Z",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    description: "Kick n Hat"
  },
  {
    key: "X",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    description: "Kick"
  },
  {
    key: "C",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    description: "Closed HH"
  },
]

function App() {
  const playSound = (e: React.KeyboardEvent<HTMLDivElement>) => {
    //Encuentro el audio clip segun el key presionado
    const clip = audioClips.find(
      (clip) => clip.key === e.key.toUpperCase()
    );

    if(!clip) return;
    (document.getElementById(clip.key) as HTMLAudioElement)
    .play() //Si se encuentra el clip, se reproduce el sonido
    .catch(console.error);

    //Hago un efecto focus del elemento
    //En el div display muestro el audio clip reproducido
    document.getElementById("drum-" + clip.key)?.focus();
    document.getElementById("display")!.innerText = clip.description;
  }

  return (
    <div id='drum-machine' className='container'>
      <h1>Drum machine project</h1>
      <div className='drum-board' onKeyDown={playSound}>
        {/* Mapeo todos los audio clips con el fin de mostrar los controles
        usando el componente Drum */}
        {audioClips.map((clip) => (
          <Drum audioClip={clip} key={clip.key} />
        ))}
      </div>
      <div id='display'></div>
    </div>
  )
}

export default App
