// create your App component here
import React, { useState, useEffect } from "react";

function App() {
  const [doggy, setDoggy] = useState("");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDoggy(data.message);
      });
  }, []);
  
  if (!doggy) return <p>Loading...</p>;

  return <img src={doggy} alt="A Random Dog" />;
}

export default App;