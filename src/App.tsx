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
          > <a href={`${baseUrl}/trevor/`}>TREVOR</a>: TAZ6-DualExtruder(v2) ,
          <a href={`${baseUrl}/pepe/`}>PEPE</a>: TAZ6-SingleExtruder
        </p>
        <p>
          > if you're new to the TAZ printers,{" "}
          <a href="https://www.lulzbot.com/learn/tutorials/your-second-print">
            this tutorial
          </a>{" "}
          should get you started
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
        <p>
          <b>
            ADDITIONAL INSTRUCTION FOR Trevor (which has a DualExtruder V2):
          </b>
        </p>
        <p>
          First switch Cura Printer to a TAZ 6 with DualExtruder. If the printer
          is not yet created in Cura, create a new one in{" "}
          <b>
            Settings > Printer > Add Printer > Choose options TAZ 6,
            DualExtruder v2 > Add Printer > In the Hot End 2 tab, set Nozzle
            offset X to 0.695 and Nozzle offset Y to -50.225
          </b>{" "}
          (these are the calibrated values for our DualNozzle and varries
          between Nozzle units)
        </p>
      </div>
    );
  }
}

export default App;
