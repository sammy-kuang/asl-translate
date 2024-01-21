import './App.css';
import Header from './components/Header';

import AboutPage from './pages/AboutPage';
import TranslationPage from './pages/TranslationPage';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" exact Component={AboutPage}></Route>
          <Route path="/translate" Component={TranslationPage}></Route>
        </Routes >
      </div >
    </Router>
  );
}

export default App;
