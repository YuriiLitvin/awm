import React from "react";
import './App.css';
import Title from "./components/title/Title.js";
import content from "./content.js";

export default function App() {
  
  const [language, setLanguage] = React.useState("ua");

  function setStateApp(value) {
    setLanguage(value);
  }

  const contentTranslation = content[language];
  const {title} = contentTranslation;
  
  // console.log(title);

  return (
    <div className="App">
      <Title 
        handleChange={setStateApp}
        title={title}
      />
      
    </div>
  );
}


