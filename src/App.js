import {useState, useEffect} from 'react';
import Player from './components/Player';

function App() {
  const [songs] = useState([
    {
      title: "Bailando",
      artist: "Enrique Iglesias",
      img_src: "./image/enrique.jpg",
      src: "./song/Bailando.mp3"
    },
    {
      title: "Hips Don't Lie",
      artist: "Shakira",
      img_src: "./image/shakira.jpg",
      src: "./song/Hips Don't Lie.mp3"
    },
    {
      title: "Levitating",
      artist: "Dua Lipa",
      img_src: "./image/dua lipa.jpg",
      src: "./song/Levitating.mp3"
    },
    {
      title: "Loca",
      artist: "Shakira",
      img_src: "./image/shakiraa.jpg",
      src: "./song/Loca.mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
    </div>
  );
}

export default App;