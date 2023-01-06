import axios from "axios";
import { useState } from 'react';

const AnotherTest = () => {
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
  data: {
    max_tokens: 40,
    stop_sequences: ['"--"'],
    return_likelihoods: 'GENERATION',
    truncate: 'END',
      prompt: `f"""   This program generates an answer based on a software engineering interview question.   

    Question: What is an argument?
    Answer: An argument is a value that is passed into a function. 
    --
    Question: What are loops?
    Answer: Loops are used to repeat a block of code a number of times.
    --
    Question: What are objects?
    Answer: An object is a collection of properties (variables, other objects, & functions), and property is a combination of name (as key) and value.`,
    model: 'xlarge',
    temperature: 0.6
  }
}
    
const handleFunction = (e) => {
    e.preventDefault();
  axios
    .request(options)
    .then((res) => {
        const results = res.data.generations[0].text
        setCall(results);
        console.log(results);
    })
  .catch((error) => {
    console.error(error);
  });
}  

  
    return (
        <>
            <div>ANOTHER ONE</div>
            <button onClick={handleFunction}>press</button>
            <h3>{ call }</h3>
        </>
        
    )
}
export default AnotherTest;