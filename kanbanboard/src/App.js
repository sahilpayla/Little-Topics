import logo from './logo.svg';
import style from "./App.module.css"
import Navbar from './components/Navbar/Navbar';
import Board from './components/Board/Board';

function App() {
  return (
    <>
      <Navbar />
      <div className={style.board_container}>
        <Board />
        <Board />
        <Board />
        <Board />
        <Board />
        <Board />
        <Board />
      </div>
    </>
  );
}

export default App;
