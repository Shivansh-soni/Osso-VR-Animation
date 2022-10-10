import "./App.css";
import "@lottiefiles/lottie-player";
import React, { useEffect } from "react";
import { create } from "@lottiefiles/lottie-interactivity";

function App() {
  useEffect(() => {
    create({
      player: "#firstLottie",
      container: "#App",
      mode: "scroll",
      actions: [
        {
          visibility: [0, 1],
          type: "seek",
          frames: [-85, 155],
        },
      ],
    });
  });
  return (
    <div className="App" id="App">
      {/* <Lottie id="firstLottie" animationData={An1} loop={false}></Lottie> */}
      <lottie-player
        mode="loop"
        id="firstLottie"
        src="https://uploads-ssl.webflow.com/60c8f557ec7fdd963afcfaad/60d0ac70ea30404c095e6b75_hero-headset_v7.1.json"
        style={{ width: "105%", height: "150vh" }}
      ></lottie-player>
    </div>
  );
}

export default App;
