import React from 'react';
import './App.css';
import Header from "./components/HeaderPage/Header"

const App : React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      {/* <main>
        <Main/>
      </main>
      <footer>
        <Footer/>
      </footer> */}
    </div>
  );
}

export default App;
