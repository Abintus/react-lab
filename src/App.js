import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import "milligram";

function App() {
    const [def_text, setText] = useState("");
    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [movies, setMovies] = useState([
        {title: "Wall-E",
         year: "2012"},
        {title: "Pulp Fiction",
         year: "2012"},
        {title: "Matrix",
         year: "2012"},
        {title: "1670",
         year: "2012"},
    ]);
    let message = "";
    if (title.length < 5) {
        message="Isn't it a bit too short?";
    } else if (title.length < 15) {
        message = "Purrfect! Ideal title length!"
    } else {
        message="What are you trying to do? Write an essay?";
        }

  function handleAddMovie(){
    const newMovie= {title: title,
                     year: year}
    setMovies([...movies, newMovie]);

    setTitle("")
    setYear("")



  }
  return (
    <div>
      <h1> My favorite movies to watch </h1>
      <h3> Titles </h3>
      <ul> {movies.map((movie) => <li key={movie.title}>{movie.title}, {movie.year}</li>)} </ul>
      <h3> New movie </h3>
      {title.length > 0 && <div> {message} </div>}
    <h> Title </h>
    <input type="text" value={title} onChange={ (event) => setTitle(event.target.value)}/>
    <h> Year </h>
    <input type="text" value={year} onChange={ (event) => setYear(event.target.value)}/>
    <button type="button" onClick={handleAddMovie}>
        Add movie
    </button>
    </div>
  );
}

export default App;
