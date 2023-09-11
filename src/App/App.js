import { getReservations, postReservation } from '../apiCalls';
import Form from '../components/Form/Form';
import Reservations from '../components/Reservations/Reservations';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [reservations, setReservations] = useState([])

  useEffect(() => {
    getReservations()
    .then(data => setReservations(data))
    .catch(err => `Something went wrong: ${err.message}`)
  }, [])
  
  const submitReservation = (inputReservation) => {
    postReservation(inputReservation)
    .then(data => setReservations([...reservations, data]))
    .catch(err => `Something went wrong: ${err.message}`)
  }

  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <div className='resy-form'>
        <Form submitReservation={submitReservation}/>
      </div>
      <div className='resy-container'>
        <Reservations reservations={reservations}/>
      </div>
    </div>
  );
}

export default App; 