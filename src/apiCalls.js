const getReservations = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
  .then(res => {
    if (!res.ok) {
      throw new Error (`${res.status}: Something went wrong`)
    }
    return res.json()
  })
}

const postReservation = (inputReservation) => {
  return fetch('http://localhost:3001/api/v1/reservations', {
    method: 'POST', 
    body: JSON.stringify(inputReservation),
    headers: {'Content-Type': 'application/json'}
  })
  .then(res => {
    if (!res.ok) {
      throw new Error (`${res.status}: Something went wrong`)
    }
    return res.json()
  })
}

export {
  getReservations,
  postReservation
}