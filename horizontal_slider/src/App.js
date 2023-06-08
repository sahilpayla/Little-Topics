import logo from './logo.svg';
import './App.css';
import Horizontal from './components/HorizontalMenuScrolling/Horizontal';

function App() {
  return (
    <>
      <h1 style={{
        textAlign: "center",
        fontSize:"105px"
      }}>
        Horizontal Menu Scrolling
      </h1>
      <Horizontal />
    </>
  );
}

export default App;
