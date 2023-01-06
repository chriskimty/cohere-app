import axios from "axios";
import { useState } from 'react';

const Test = () => {
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
    return_likelihoods: 'NONE',
    truncate: 'END',
      prompt: `f"""   
    This program generates a pet name and personality given the type and age of pet.
    Type of pet: cat
    Age of pet: 1
    Pet name: Chabs
    Personality: playful
    --
    
    Type of pet: dog
    Age of pet: 10
    Pet name: Dobby
    Personality: calm
    --
    Type of pet: turtle
    Age of pet: 3.5
    Pet name: Albert
    Personality: intelligent
    `,
    model: 'xlarge',
    temperature: 0.6
  }
}
    
const handleFunction = (e) => {
    e.preventDefault();
  axios
    .request(options)
    .then((res) => {
    //   const results = res.data.generations[0].text;
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
            <div>Hello</div>
            <button onClick={handleFunction}>press</button>
            <h3>{ call }...</h3>
        </>
        
    )
}
export default Test;