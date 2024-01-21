import './App.css';
import InputBox from './components/input-box.components';

import logoImage from './images/logo.png';

function App() {
  return (
    <div className="App">
      <img className="logo" src={ logoImage } alt='logo' width = '250px' 
      height = 'auto'/>
      <InputBox/>
    </div>
  );
}

export default App;
