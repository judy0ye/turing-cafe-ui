import './Reservations.css'

const Reservations = ({reservations}) => {
  return reservations.map(reservation => {
     return (
    <>
      <h2>{reservation.name}</h2>
      <p>{reservation.date}</p>
      <p>{reservation.time} pm</p>
      <p>Number of Guests: {reservation.number}</p> 
    </>
  )
  })
 
}

export default Reservations