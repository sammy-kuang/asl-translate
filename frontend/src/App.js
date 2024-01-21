import './App.css';
import InputBox from './components/input-box.components';
import VideoPlayer from './components/video-player.components';

import logoImage from './images/logo.png';

function App() {
  return (
    <div className="App">
      <img className='image' src={logoImage} 
      width = '200px' 
      height = 'auto' 
      alt='logo'
      />
      <h1 className='text'>Speak with Your Hands, Learn with Your Heart</h1>
      <div className="side-by-side">
        <InputBox />
        <VideoPlayer />
      </div>
    </div>
  );
}

export default App;
