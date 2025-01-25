import {useState} from "react";

export default  function MovieListItem(props) {

    return props.movies.map((movie) => <li key={movie.title}>{movie.title}, {movie.year}</li>);
}