import './App.css';

import logoImage from './images/logo.png';
import AboutPage from './pages/AboutPage';
import TranslationPage from './pages/TranslationPage';

function App() {
  return (
    <div className="App">
      <h1 className='head-text'>ASL Translate</h1>
      <TranslationPage></TranslationPage>
    </div>
  );
}

export default App;
