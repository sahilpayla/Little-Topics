import { useState } from "react";
import './App.css';


const App = () => {
  const [counter, setCounter] = useState(0);

  const handleClick0 = () => {
    setCounter(0)
    alert('Reset Button Clicked')
  }

  const handleClick1 = () => {
    if (counter === 0) {
      setCounter(0);
      alert('Zero is last value after decrement')
    }
    else {
      setCounter(counter - 1)
    }
  }

  const handleClick2 = () => {
    if (counter === 999) {
      setCounter(999);
      alert('Ohh bas Kar baiii')
    }
    else {
      setCounter(counter + 1)
    }
  }

  return (
    <>
      <div className="background">
        <div className="main__container">
          <div className="display__section">
            {counter}
            <button onClick={handleClick0} className="reset">Reset</button>
          </div>
          <div className="btn__section">
            <button onClick={handleClick1} className="left__btn">-</button>
            <button onClick={handleClick2} onMouseOver={handleClick2} onMouseLeave={handleClick2} className="right__btn">+</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App