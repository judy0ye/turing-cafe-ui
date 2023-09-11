import { useState } from 'react'
import './Form.css'

const Form = ({submitReservation}) => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    number: '' 
  })

  const handleChange = e => {
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
  }

  const handleClick = (e) => {
    e.preventDefault()
    const newReservation = {
      id: Date.now(),
      name: formData.name,
      date: formData.date,
      time: formData.time,
      number: formData.number
    }
    submitReservation(newReservation)
    setFormData({name: '', date: '', time: '', number: ''})
  }

  return (
    <form>
      <label htmlFor='name' />
      <input 
        id='name'
        type='text'
        placeholder='Name'
        name='name'
        value={formData.name}
        onChange={handleChange}
      />          
      <label htmlFor='date' />
      <input 
        id='date'
        type='text'
        placeholder='Date (mm/dd)'
        name='date'
        value={formData.date}
        onChange={handleChange}
      />          
      <label htmlFor='time' />
      <input 
        id='time'
        type='text'
        placeholder='Time'
        name='time'
        value={formData.time}
        onChange={handleChange}
      />          
      <label htmlFor='number' />
      <input 
        id='number'
        type='text'
        placeholder='Number of guests'
        name='number'
        value={formData.number}
        onChange={handleChange}
      />          
      <button className='submit-button' onClick={handleClick}>Make a Reservation</button>
    </form>
  )
}

export default Form