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

const handleFunction = (e) => {
  e.preventDefault();
  setIsPending(true);
  setCall(null);
  setError(null);
    axios
      .request(options)
      .then((res) => {
      const results = res.data.generations[0].text
      // Used split method to grab only the data that doesn't include new lines or unneeded spaces
      const modifiedResults = results.split(' ')[1]
        setCall(modifiedResults);
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