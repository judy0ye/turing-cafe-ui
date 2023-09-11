import { getReservations } from '../apiCalls';
import Form from '../components/Form/Form';
import Reservations from '../components/Reservations/Reservations';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [reservations, setReservations] = useState([])

  useEffect(() => {
    getReservations()
    .then(data => setReservations(data))
    .catch(err => `${err.message} Something went wrong`)
  }, [])
  
  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <div className='resy-form'>
        <Form />
      </div>
      <div className='resy-container'>
        <Reservations reservations={reservations}/>
      </div>
    </div>
  );
}

export default App; 