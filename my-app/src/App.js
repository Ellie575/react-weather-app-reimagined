import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        This app was coded by{" "}
        <a href="https://sad-bardeen-5faffc.netlify.app/">Ellie Kubo </a>
        and is{" "}
        <a
          href="https://github.com/Ellie575/react-weather-app-reimagined"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced on Github
        </a>
      </footer>
    </div>
  );
}

export default App;
