import { useEffect, useState } from 'react'
import Card from '../Components/Card'
import axios from 'axios';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  
  //Creo un estado auxiliar mientras cuadramos bien el Contetxt 

  const url = "https://jsonplaceholder.typicode.com/users";
  const [dentistList, setDentistList] = useState([])


  useEffect(() => {
    axios(url)
    .then(response => setDentistList(response.data))
  },[])

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {dentistList.map(dentist => <Card dentist={dentist} key={dentist.id}/>)}
      </div>
    </main>
  )
}

export default Home