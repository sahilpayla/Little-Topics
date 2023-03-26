import React, { useEffect, useState } from 'react';
import './App.css';
import Post from './components/Post';
import { ThemeContext, themes } from './Context/ThemeContext.js'

function App() {
  const [theme, setTheme] = useState(themes.light)

  // function for button 
  const handleOnClick = () => {
    theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light)
  }

  const body = document.body;
  useEffect(() => {
    switch (theme) {
      case themes.light:
        body.classList.remove('bg-dark');
        body.classList.remove('text-light');
        body.classList.add('bg-light');
        body.classList.add('text-dark');
        break;
      case themes.dark:
        body.classList.remove('bg-light');
        body.classList.remove('text-dark');
        body.classList.add('bg-dark');
        body.classList.add('text-light');
        break;
        
      default:
        body.classList.remove('bg-dark');
        body.classList.remove('text-light');
        body.classList.add('bg-light');
        body.classList.add('text-dark');
    }
  }, [theme])

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
