import './App.css';
import InputBox from './components/input-box.components';
import VideoPlayer from './components/video-player.components';

import logoImage from './images/logo.png';

function App() {
  return (
    <div className="App">
      <img src={logoImage} 
      width = '300px' 
      height = 'auto' 
      alt='logo'
      />
      <div className="side-by-side">
        <h1></h1>
        <InputBox />
        <VideoPlayer />
      </div>
    </div>
  );
}

export default App;
