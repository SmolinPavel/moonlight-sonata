import { playMelody } from 'browser-dj-js';

import './App.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  const audioContext = new AudioContext();
  const bassAudioContext = new AudioContext();
  const melody = [
    { note: 'G#3', duration: 0.5 },
    { note: 'C#4', duration: 0.5 },
    { note: 'E4', duration: 0.5 },
    { note: 'G#3', duration: 0.5 },
    { note: 'C#4', duration: 0.5 },
    { note: 'E4', duration: 0.5 },
    { note: 'G#3', duration: 0.5 },
    { note: 'C#4', duration: 0.5 },
    { note: 'E4', duration: 0.5 },
    { note: 'G#3', duration: 0.5 },
    { note: 'C#4', duration: 0.5 },
    { note: 'E4', duration: 0.5 },
  ];

  const melody2 = [
    { note: 'A3', duration: 0.5 },
    { note: 'C#4', duration: 0.5 },
    { note: 'E4', duration: 0.5 },
    { note: 'A3', duration: 0.5 },
    { note: 'C#4', duration: 0.5 },
    { note: 'E4', duration: 0.5 },
    { note: 'A3', duration: 0.5 },
    { note: 'D4', duration: 0.5 },
    { note: 'F#4', duration: 0.5 },
    { note: 'A3', duration: 0.5 },
    { note: 'D4', duration: 0.5 },
    { note: 'F#4', duration: 0.5 },
  ];

  const melody3 = [
    { note: 'G#3', duration: 0.5 },
    { note: 'C#4', duration: 0.5 },
    { note: 'F#4', duration: 0.5 },
    { note: 'G#3', duration: 0.5 },
    { note: 'C#4', duration: 0.5 },
    { note: 'E4', duration: 0.5 },
    { note: 'G#3', duration: 0.5 },
    { note: 'C#4', duration: 0.5 },
    { note: 'D#4', duration: 0.5 },
    { note: 'F#3', duration: 0.5 },
    { note: 'C4', duration: 0.5 },
    { note: 'D#4', duration: 0.5 },
  ];
  const play = () => {
    playMelody(bassAudioContext, [
      { note: 'C#3', duration: 6 },
      { note: 'B2', duration: 4.5 },
      { note: 'B2', duration: 1.5 },
      { note: 'A2', duration: 3 },
      { note: 'F#3', duration: 3 },
      { note: 'G#2', duration: 3 },
      { note: 'G#2', duration: 3 },
    ]);
    playMelody(audioContext, [...melody, ...melody, ...melody2, ...melody3]);
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={play}>Play Moonlight Sonata</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
