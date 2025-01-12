import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    const [title, setTitle] = useState("Wall-E");
    let message = "";
    if (title.length < 5) {
        message="Isn't it a bit too short?";
    } else if (title.length < 15) {
        message = "Purrfect! Ideal title length!"
    } else {
        message="What are you trying to do? Write an essay?";
        }
  function handleChange(event){
    setTitle(event.target.value);
    }

  return (
    <div className="App">
      <header className="App-header">
        My favorite movies to watch
      </header>
      <h2> My favorite movie for today is {title} </h2>
      {title.length > 0 && <div> {message} </div>}
    <input type="text" onChange={handleChange} value={title}/>

    </div>
  );
}

export default App;
