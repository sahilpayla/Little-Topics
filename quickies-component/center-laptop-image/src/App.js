
import './App.css';
import laptop from './Images/MacBook Pro 16.png';
import screen from './Images/laptop.png';
function App() {
  return (
    <>
      <div className="container">
        <img src={laptop} alt="" />
        <div className="inner-container">
          <img src={screen} alt="" />
        </div>
      </div>
    </>
  );
}

export default App;
