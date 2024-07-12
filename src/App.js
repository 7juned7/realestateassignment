
import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import { useContext } from 'react';
import './App.css';
import Header from './components/Header';

import PageContext from './Context/PageContext';

import Home from './Pages/Home';
import Homepage from './Pages/Homepage';
import Preview from './Pages/Preview';
import SellerHomePage from "./Pages/SellerHomePage";

function App() {
  const { formPage } = useContext(PageContext);

  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<SellerHomePage />} />
            <Route exact path="/preview" element={<Preview />} />
          </Routes>
        </div>
      </Router>





    </div>
  );
}

export default App;
