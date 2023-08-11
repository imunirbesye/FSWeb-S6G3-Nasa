import React, {useState, useEffect} from "react";
import axios, {isCancel, AxiosError} from 'axios';
import "./App.css";
import LogoCubugu from "./bilesenler/LogoCubugu";
import Contents from "./bilesenler/Contents"; 

function App() {

  const [veriler, setVeriler] = useState([]); 

  useEffect(
    () => {
      const apiUrl = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2023-05-31";
      axios.get(apiUrl)
      .then((response) => {    
        setVeriler(response.data); 
      })
      .catch((err) => {
        console.log(err);
      }); 
    }, []);

  return (
    <div className="App"> 
      <LogoCubugu />
      {
        veriler ? <Contents veriler={veriler} /> : "Yükleniyor"
      }
      
    </div>
  );
}

export default App; 