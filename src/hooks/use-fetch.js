import React, { useState, useEffect } from "react";

const useFetch = (url, config) => {
  const [isLoading, setLoading] = useState(false); //The state which stores the loading state
  const [error, setError] = useState(null); // It sores the 'error message'
  const [responseValue, setResponseValue] = useState(""); //It stores the data received from server

  //Using useEffect in order to prevent 'Infinite loops'.
  useEffect(() => {
    setLoading(true); //Loading starts from here
    setError(null); //The Error form last request is removed

    const sendRequest = async () => {
      try {
        const request = await fetch(url);
        // The request has been sent and if we face any faliuar, we will throw a 'customized Error'
        if (request.ok) {
          const response = await request.json();
          setResponseValue(response); //Our desired data is stored in its state
          setLoading(false);
        } else {
          throw new Error(`${request.status} ${request.statusText}`);
        }
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    sendRequest();
  }, []);

  return { responseValue, error, isLoading };
};

export default useFetch;
