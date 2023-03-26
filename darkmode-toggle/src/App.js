import React, {useState} from 'react';
import './App.css';
import Post from './components/Post';

function App() {
  const [theme, setTheme] = useState('light')
  return (
    <>
      <h1 className='heading1'>Light Dark Theme</h1>
      <Post theme={theme} />
    </>
  );
}

export default App;
