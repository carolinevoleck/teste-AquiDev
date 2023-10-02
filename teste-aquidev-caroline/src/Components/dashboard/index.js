import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Solicitação à API Punk API
    axios.get('https://api.punkapi.com/v2/beers')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar dados da API:', error);
      });
  }, []);

  return (
    <div className="container">
      <div className="dashboard">
        <h2>Lista de Cervejas:</h2>
        <ul>
          {data.map(beer => (
            <li key={beer.id}>
              <h3>{beer.name}</h3>
              <p>{beer.tagline}</p>
              <p>Teor Alcoólico: {beer.abv}%</p>
              <p>Descrição: {beer.description}</p>
              {beer.image_url && (
                <img src={beer.image_url} alt={beer.name} style={{ maxWidth: '100px' }} />
              )}
              
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Dashboard;
