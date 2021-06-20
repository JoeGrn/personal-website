import Particles from "react-particles-js";

import "../styles/globals.css";
import particlesConfig from "../config/particlesConfig";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Particles
        style={{ position: "absolute" }}
        height="100%"
        width="100%"
        params={particlesConfig}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
