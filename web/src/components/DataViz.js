import React from "react";
import HeroSection from './aesthetics/HeroSection';
import { Typography, Button } from "antd";


const { Title } = Typography;

export const DataViz = () => {
    return(
      <div>
        <Title>Particle Physics Data Vizualization</Title>
        <div style={{display:"flex", flexDirection:"Column", justifyContent:"Right"}}>
          <iframe width="900" height="710" src="https://twiki.cern.ch/twiki/pub/CMSPublic/Hig13002TWiki/HZZ4l_animated.gif" allowFullScreen></iframe>
          <Button
          style={{
            backgroundColor: "#FFA500",
            color: "white",
            border: "0",
            width: "500px",
            height: "auto",
            padding: "10px",
            fontSize: "1.2em",
          }}
          onClick={() =>
            window.open(
              "https://particle-physics-playground.github.io/#",
              "_blank"
            )
          }
        >
        More from Particle Physics Playground
        </Button>
        </div>
      </div>

    );
};
