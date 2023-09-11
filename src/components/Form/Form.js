import { useState } from 'react'
import './Form.css'

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    number: '' 
  })

  console.log({formData})
  const handleChange = e => {
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
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
        type='date'
        placeholder='Date (mm/dd)'
        name='date'
        value={formData.date}
        onChange={handleChange}
      />          
      <label htmlFor='time' />
      <input 
        id='time'
        type='time'
        placeholder='Enter your Name here'
        name='time'
        value={formData.time}
        onChange={handleChange}
      />          
      <label htmlFor='number' />
      <input 
        id='number'
        type='number'
        placeholder='Number of guests'
        name='number'
        value={formData.number}
        onChange={handleChange}
      />          
      <button>Make a Reservation</button>
    
    </form>
  )
}
export default Form