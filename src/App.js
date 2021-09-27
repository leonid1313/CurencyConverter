import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';
import Loader from './components/Loader/Loader';
import About from './components/About/About';
import Converter from './components/Converter/Converter'

function App() {

  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(false);
    setTimeout(() => {
      setLoader(true)
    }, 1000)
  }, []);

  return (
    <>
      {loader 
      ? (
        <>
          <Router basename="/currencyconverter">
              <Route path="/" exact component={Converter}/>
              <Route path="/about" exact component={About}/>
          </Router>
        </>
      )
      :  <Loader/>}
    </>
  );
}

export default App;
