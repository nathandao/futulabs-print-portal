import * as React from "react";
import "./App.css";

const baseUrl = "http://hki-octoprint.futurice.com";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">_futulabs</h1>
        </header>
        <p>> welcome to futulabs 3d printer portal, u shall proceed...</p>
        <p>
          > <a href={`${baseUrl}/trevor/`}>trevor</a>: TAZ6-DualExtruder(v2) ,
          <a href={`${baseUrl}/pepe/`}>pepe</a>: TAZ6-SingleExtruder
        </p>
        <div className="camera-container">
          <a
            className="camera-feed camera-feed-trevor"
            href={`${baseUrl}/trevor/`}
          >
            tr3v0r
          </a>
          <a className="camera-feed camera-feed-pepe" href={`${baseUrl}/pepe/`}>
            p3p3
          </a>
        </div>
      </div>
    );
  }
}

export default App;
