import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDentistStates } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const {state, dispatch} = useDentistStates()

  const params = useParams()
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`

  useEffect(() => {
    axios(url)
    .then((response) =>{
      dispatch({ type: "GET_DENTIST", payload: response.data })
    })
  
  })

  return (
    <>
      <h1>Detail Dentist - ID: {state.dentistSelected.id}</h1>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Telephone</th>
          <th>Website</th>
        </tr>
        <tr>
          <th>{state.dentistSelected.name}</th>
          <th>{state.dentistSelected.email}</th>
          <th>{state.dentistSelected.phone}</th>
          <th>{state.dentistSelected.website}</th>
        </tr>
      </table>
    </>
  )
}

export default Detail