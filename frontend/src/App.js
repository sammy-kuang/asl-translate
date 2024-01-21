import './App.css';

import logoImage from './images/logo.png';
import AboutPage from './pages/AboutPage';
import TranslationPage from './pages/TranslationPage';

function App() {
  return (
    <div className="App">
      <img src={logoImage}
        width='300px'
        height='auto'
        alt='logo'
      />
      <TranslationPage></TranslationPage>
    </div>
  );
}

export default App;
