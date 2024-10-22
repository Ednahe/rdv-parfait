import React from 'react';
import '@picocss/pico/css/pico.min.css';
import './App.css';
import './reseter.css';
import Header from './componants/Header';
import Main from './componants/Main';
import Footer from './componants/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
