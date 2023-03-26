import React, { useState } from 'react';
import './App.css';
import Post from './components/Post';
import { ThemeContext, themes } from './Context/ThemeContext.js'

function App() {
  const [theme, setTheme] = useState(themes.light)

  // function for button 
  const handleOnClick = () => {
    theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light)
  }

  return (
    <>
      <ThemeContext.Provider value={{ theme, handleOnClick }}>
        <h1 className='heading1'>Light Dark Theme</h1>
        <Post theme={theme} />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
