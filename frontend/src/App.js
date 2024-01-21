import './App.css';

import logoImage from './images/logo.png';
import AboutPage from './pages/AboutPage';
import TranslationPage from './pages/TranslationPage';

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
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
=======
      <img src={logoImage}
        width='300px'
        height='auto'
        alt='logo'
      />
      <TranslationPage></TranslationPage>
>>>>>>> 161197024c39036ca567adc083c49671592d7e35
    </div>
  );
}

export default App;
