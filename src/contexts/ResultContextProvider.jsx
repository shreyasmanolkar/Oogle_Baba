import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('Elon musk');

  const getResults = async (type) => {
    setLoading(true);

    const res = await fetch(`${baseUrl}${type}`, {
      method: 'GET',
      headers:{
        'X-User-Agent': 'desktop',
        'X-Proxy-Location': 'EU',
        'X-RapidAPI-Key': process.env.REACT_APP_GOOGLE_API_KEY,
        'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
    }
    });

    const data = await res.json();

    // if(type.includes('/news')){
    //     setResults(data.entries);
    // } else if(type.includes('/image')){
    //     setResults(data.image_results);
    // } else {
    //     setResults(data.results);
    // }
    
    setResults(data); 
    setLoading(false);
  };

  return (
    <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, loading }}>
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);