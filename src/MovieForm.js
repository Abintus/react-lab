import {useState} from "react";

export default  function MovieForm(props) {
    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");

    let message = "";
    if (title.length < 5) {
        message="Isn't it a bit too short?";
    } else if (title.length < 15) {
        message = "Purrfect! Ideal title length!"
    } else {
        message="What are you trying to do? Write an essay?";
        }

    /**
     * Handle adding a new movie.
     *
     * This function adds a new movie to the movie list.
     *
     * @function handleAddMovie
     * @returns {undefined}
     */
    function handleAddMovie(event) {
        event.preventDefault();
        if (title.length > 0 && year.length > 0) {
            const newMovie = {
                title: title,
                year: year
            }
            //setMovies([...movies, newMovie]);
            props.onMovieSubmit({title, year});
            setTitle("")
            setYear("")
        } else {
            alert("Pola tekstowe nie mogą być puste!")
        }
    }



    return <form onSubmit={handleAddMovie}>
        {title.length > 0 && <div> {message} </div>}
        <div>
            <h> Title</h>
            <input type="text" value={title} onChange={(event) => setTitle(event.target.value)}/>
        </div>
        <div>
            <h> Year</h>
            <input type="text" value={year} onChange={(event) => setYear(event.target.value)}/>
        </div>
        <button>
            Add movie
        </button>
    </form>;
}