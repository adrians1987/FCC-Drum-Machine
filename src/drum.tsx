import { AudioClip } from "./audioclip";
import './App.css'

//Interfaz que utiliza AudioClip
interface DrumpProps{
    audioClip: AudioClip;
}

const Drum = ({audioClip}: DrumpProps) => {
    const playSound = (clip: AudioClip) => {
        //Si encuentra elemento reproduce el sonido
        (document.getElementById(clip.key) as HTMLAudioElement)
        .play()
        .catch(console.error);

        //Modifica el valor de div display por valor de description
        document.getElementById("display")!.innerText = clip.description;
    }

    return (
        <button className="drum-pad" id={`drum-${audioClip.key}`} onClick={() => playSound(audioClip)}>
            <audio id={audioClip.key} src={audioClip.url} className="clip" />
            {audioClip.key}
        </button>
    )
}

export default Drum;