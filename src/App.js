import logo from './logo.svg';
import './App.css';

function handleChange(event){
    console.log(event.target.value);
}

function App() {
    let title = "Wall-E"
  return (
    <div className="App">
      <header className="App-header">
        My favorite movies to watch
      </header>
      <h2> My favorite movie for today is {title} </h2>
    <input type="text" onChange={handleChange}/>

    </div>
  );
}

export default App;
