import "./App.css";
import "@lottiefiles/lottie-player";

import React, { useEffect } from "react";
import { create } from "@lottiefiles/lottie-interactivity";
function App() {
  const myRef = React.useRef();
  useEffect(() => {
    const timer = setTimeout(() => {
      create({
        container: "#App",
        player: "#firstLottie",
        mode: "scroll",
        actions: [
          {
            visibility: [0, 1],
            type: "seek",
            frames: [-85, 155],
          },
          setLoading(true),
        ],
      });
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="App" id="App">
      {/* <Lottie id="firstLottie" animationData={An1} loop={false}></Lottie> */}
      <lottie-player
        ref={myRef}
        id="firstLottie"
        style={{ height: "150vh" }}
        src="https://uploads-ssl.webflow.com/60c8f557ec7fdd963afcfaad/60d0ac70ea30404c095e6b75_hero-headset_v7.1.json"
      ></lottie-player>
    </div>
  );
}

export default App;
