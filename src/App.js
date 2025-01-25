import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import "milligram";
import MovieForm from "./MovieForm";
import MovieList from "./MovieList";

function App() {
    const [movies, setMovies] = useState([
        {
            title: "Wall-E",
            year: "2012"
        },
        {
            title: "Pulp Fiction",
            year: "2012"
        },
        {
            title: "Matrix",
            year: "2012"
        },
        {
            title: "1670",
            year: "2012"
        },
    ]);

  return (
      <div>
          <h1> My favorite movies to watch </h1>
          <h3> Titles </h3>
          <MovieList movies={movies}/>
          <h3> New movie </h3>
          <MovieForm onMovieSubmit={(movie) => setMovies([...movies, movie])}/>
      </div>


  );
}

export default App;
