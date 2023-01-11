import axios from "axios";
import { useState } from 'react';

const useCoGen = () => {
  const [type, setType] = useState('');
  const [personality, setPersonality] = useState('');
  const [call, setCall] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

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
      model: 'xlarge',
      temperature: 0.6,
      max_tokens: 5,
      stop_sequences: ['--'],
      return_likelihoods: 'NONE',
      truncate: 'END',
      logit_bias: { '11': -10 },
      prompt: `f"""
      This program generates a pet name given the type and personality of pet. Here are some examples:

      Type: cat
      Personality: hilarious
      Name: Chabs
      --
      Type: dog
      Personality: calm
      Name: George
      --
      Type: turtle
      Personality: intelligent
      Name: Albert
      --
      Type: ${type}
      Personality: ${personality}
      Name: `,
  }
}

// Errors to further handle:
  // Disable button after one-time use? Or change text to regenerate?
  // If regenerate, remove the data once it's re-clicked

// For scalability and reusability:
  // Make separate component for forms - DONE
  // make a custom hook (useCoGen?/useAxios?) for the actual axios function? - DONE (but could be better)
  // Still need to figure out how to call the prompt on a different component
const handleFunction = (e) => {
    e.preventDefault();
    setIsPending(true);
    axios
      .request(options)
      .then((res) => {
      const results = res.data.generations[0].text
      // Used split method to grab only the data that doesn't include new lines or unneeded spaces
      const modifiedResults = results.split(' ')[1]
        setCall(modifiedResults);
        console.log(modifiedResults);
        setIsPending(false);
      })
      .catch((err) => {
      setIsPending(false);
      setError('Could not get data. Please try again!', err.message)
    })
}  
  return { type, personality, setType, setPersonality, handleFunction, call, isPending, error }
}
export default useCoGen;