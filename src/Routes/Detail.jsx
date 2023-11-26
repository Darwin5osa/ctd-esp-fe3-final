import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  //temporal: 
  const [dentist, setDentist] = useState({})
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const params = useParams()
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`

  useEffect(() => {
    axios(url)
    .then(response => setDentist(response.data))
  })

  return (
    <>
      <h1>Detail Dentist - ID: {dentist.id}</h1>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Telephone</th>
          <th>Website</th>
        </tr>
        <tr>
          <th>{dentist.name}</th>
          <th>{dentist.email}</th>
          <th>{dentist.phone}</th>
          <th>{dentist.website}</th>
        </tr>
      </table>

      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail