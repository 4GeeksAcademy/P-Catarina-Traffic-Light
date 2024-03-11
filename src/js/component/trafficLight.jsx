import React, { useState } from "react";

const TrafficLight = () => {
  //lights
  let lightColors = ["red", "yellow", "green"];
  const [selectedLight, setSelectedLight] = useState(-1);
  const [selectedColor, setSelectedColor] = useState('');

  //lights generator
  const lights = lightColors.map((color, index) => (
    <div id={color + 'Light'}
    className={selectedLight === index ? "light On" : "light"}
    onClick={() => {
    	setSelectedLight(index);
        setSelectedColor(color);
      }}
    ></div>
  ));


  //component built
  return (
    <div className="container-fluid">
      <div id="trafficPole"></div>
      <div id="trafficLights">{lights}</div>
	  <h1 id={selectedColor + 'Text'}>{selectedColor}</h1>
    </div>
  );
};

export default TrafficLight;
