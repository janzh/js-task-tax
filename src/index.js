import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div className="App">
        <div>Trinnskattskalkulator</div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
