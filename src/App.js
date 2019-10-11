import React, { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";
import Header from './components/Header';
import ListNews from './components/ListNews';
import Formulario from './components/Formulario';
 
export default function App() {
  const [news, setNews] = useState([])
  useEffect(()=>{
    getData();
  },[]);
  
  const getData = async (categoria = 'general') => {
  const urll = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=a9e17a8cd63444638f3df0e4306469f5`;
  const respuesta = await axios(urll);
  const response = respuesta.data.articles;
    setNews(response);
    console.log(response)
    // console.log(response[1].url)
  }
  
  return (
    
    <div className="App">
     <Header 
        title="Noticias de Argentina"
        className="header"
      /> 
      <Formulario
      getData={getData}
      />
     <ListNews
      news={news}
     />
    </div>
    
  );
}

