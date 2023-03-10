import React from "react";
import './App.css';
import content from "./content.js";
import Title from "./components/title/Title.js";
import Mission from "./components/mission/Mission.js";
import Point from "./components/point/Point.js";

export default function App() {
  
  const [language, setLanguage] = React.useState("ua");

  function setStateApp(value) {
    setLanguage(value);
  }

  const contentTranslation = content[language];
  const {title, mission, point} = contentTranslation;
  
  return (
    <div className="App">
      <Title 
        handleChange={setStateApp}
        title={title}
      />
      <Mission 
        missionContent={mission}
      />
      <Point 
        pointContent={point}
      />
    </div>
  );
}


