import './App.css';
import axios from 'axios';
import { useState } from 'react';
import Test from './components/Test';
import AnotherTest from './components/AnotherTest';

const App = () => {

  const [call, setCall] = useState([]);
  const [input, setInput] = useState('');
const options = {
  method: 'POST',
  url: 'https://api.cohere.ai/generate',
  headers: {
    accept: 'application/json',
    'Cohere-Version': '2022-12-06',
    'content-type': 'application/json',
    authorization: 'Bearer 8kl34XlvUeLprVfyY77fq3hF5CMBUQ74X3bK9n9E'
  },
  data: {model: 'medium', max_tokens: 100,  return_likelihoods: 'NONE', truncate: 'END', prompt: `${input}`}
};

  const handleFunction = (e) => {
    setInput(input);
    e.preventDefault();
  axios
    .request(options)
    .then((res) => {
      const results = res.data.generations[0].text;
      setCall(results);
      console.log(results);
    })
  .catch((error) => {
    console.error(error);
  });
    setInput('');
}  

  return (
    <div className="App">

      <Test />
      <AnotherTest />
      <form onSubmit={handleFunction} action="submit">
        <label htmlFor="text">type here</label>
        <input type="text" value={input}
          onChange={(e) => setInput(e.target.value) } required/>
        <button>click</button>
      </form>
      <h2>{ call }...</h2>
    </div>
  );
}

export default App;
