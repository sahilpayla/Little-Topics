import React, { useContext } from "react";
import '../App.css';
import { ThemeContext } from "../Context/ThemeContext";


const Posts = () => {
  const { theme, handleOnClick } = useContext(ThemeContext);
  return (
    <div>
      <h4>My Post With {theme}</h4>
      <button
        className={`${theme === "dark" ? "btn-light" : "btn-dark"}`}
        onClick={handleOnClick}
      >
        {theme === "Dark" ? "Light" : "Dark"}
      </button>
    </div>
  );
};

export default Posts;