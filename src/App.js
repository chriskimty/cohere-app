import './App.css';
import axios from 'axios';
import { useState } from 'react';

const App = () => {

  const [call, setCall] = useState([]);

const options = {
  method: 'POST',
  url: 'https://api.cohere.ai/generate',
  headers: {
    accept: 'application/json',
    'Cohere-Version': '2022-12-06',
    'content-type': 'application/json',
    authorization: 'Bearer 8kl34XlvUeLprVfyY77fq3hF5CMBUQ74X3bK9n9E'
  },
  data: {model: 'medium', max_tokens: 100,  return_likelihoods: 'NONE', truncate: 'END', prompt: "There once was a cat named Chabs."}
};


const handleFunction = (e) => {
  e.preventDefault();
  axios
  .request(options)
  .then((res) => {
    const results = res.data.generations[0].text
    setCall(results)
    console.log(results)
  })
  .catch((error) => {
    console.error(error);
  });
  
}  

  return (
    <div className="App">
      <button onClick={handleFunction}>click</button>
      <h2>{ call }...</h2>
    </div>
  );
}

export default App;
