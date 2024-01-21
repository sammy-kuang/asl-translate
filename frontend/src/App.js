import './App.css';
import Header from './components/Header';

import HomePage from './pages/HomePage';
import TranslationPage from './pages/TranslationPage';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact Component={HomePage}></Route>
          <Route path="/translate" Component={TranslationPage}></Route>
        </Routes >
      </div >
    </Router>
  );
}

export default App;
