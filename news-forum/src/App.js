import React, { useEffect, useState } from 'react';
import {REACT_APP_API_URL, REACT_APP_API_KEY} from './Components/api'
import NewsComponent from './Components/NewsComponent';
import Navbar from './Components/Navbar'

import data from './Components/data.json' //for development purposes only


function App() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const generateUrl = (query,country,category) =>{
    let apiUrl= `${REACT_APP_API_URL}/`;

    if(!query && !category){
      apiUrl+='top-headlines?'
      if(!country)
        country='in';
    }
    else apiUrl+='everything?'
    if(query){
      apiUrl+=`q=${query}`
    }
    if(category)
    {
      if(apiUrl.charAt(apiUrl.length-1)!=='?')
        apiUrl+='&'
      apiUrl+=`category=${category}`
    }

    if(country)
    {
      if(apiUrl.charAt(apiUrl.length-1)!=='?')
        apiUrl+='&'
      apiUrl+=`country=${country}`
    }
    if(apiUrl.charAt(apiUrl.length-1)!=='?')
      apiUrl+='&'
    apiUrl+=`sortBy=popularity&apiKey=${REACT_APP_API_KEY}`

    return apiUrl;
  }

  const fetchData= async (query,country,category) => {
    try {
      
      const apiUrl=generateUrl(query,country,category);
      console.log(apiUrl)
      // const response = await fetch(apiUrl);
      // const data = await response.json();
      setNews(data.articles);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }

  useEffect(() => {
      fetchData(null,null,null);
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="container">
      <Navbar fetchData={fetchData}/>
      <NewsComponent news={news}/>
    </div>
  );
}

export default App;