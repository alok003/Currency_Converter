import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App';
import CurrConverter from './Components/Converter';
import Header from './Components/Header';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<App />}></Route>
        <Route exact path='/currency' element={<CurrConverter />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
