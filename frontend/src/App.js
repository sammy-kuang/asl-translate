import './App.css';
import InputBox from './components/input-box.components';
import VideoPlayer from './components/video-player.components';

import logoImage from './images/logo.png';

function App() {
  return (
    <div className="App">
      <h1 className='head-text'>ASL Translate</h1>
      <div className="side-by-side">
        <InputBox />
        <VideoPlayer />
      </div>
    </div>
  );
}

export default App;
