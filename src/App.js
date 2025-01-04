// import logo from './logo.svg';
import "./App.css";
import Left from "./components/left/left.js";
import Center from "./components/center/center.js";

function App() {
  return (
    <div id="app">
      <div id="left">
        <Left />
      </div>
      <div id="center">
        <Center />
      </div>
    </div>
  );
}

export default App;
