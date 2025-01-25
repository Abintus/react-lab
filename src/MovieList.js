import {useState} from "react";
import MovieListItem from "./MovieListItem";

export default  function MovieList(props) {

    return <div>
        <ul> <MovieListItem movies={props.movies}/></ul>
    </div>;
}