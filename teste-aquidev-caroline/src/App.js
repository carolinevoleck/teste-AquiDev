import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import './Styles/global.css';
import Dashboard from './Components/dashboard'; 
import Login from './Components/login'; 



function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    
    axios.get('https://api.punkapi.com/v2/beers')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar dados da API:', error);
      });
  }, []);

  return (
    <>
      <Route exact path="/" component={Login} />
      <Route exact path="/dashboard">
        {/* Renderize os dados da API aqui */}
        <h2>Lista de Cervejas:</h2>
        <ul>
          {data.map(beer => (
            <li key={beer.id}>
              <h3>{beer.name}</h3>
              <p>{beer.tagline}</p>
              <p>Teor Alcoólico: {beer.abv}%</p>
              <p>Descrição: {beer.description}</p>
        
            </li>
          ))}
        </ul>
        <Dashboard />
      </Route>
    </>
  );
}

export default App;
