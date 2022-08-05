import React, { useState } from "react";


import { Navbar } from './components/Navbar';
import { Rroutes } from './components/Rroutes';
import { Footer } from './components/Footer';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={ darkTheme ? 'dark' : ''}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
        <Rroutes/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;