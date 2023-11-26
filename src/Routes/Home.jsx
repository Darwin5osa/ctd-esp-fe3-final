import Card from '../Components/Card'
import { useDentistStates } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {state} = useDentistStates()

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {state.dentistList.map(dentist => <Card dentist={dentist} key={dentist.id}/>)}
      </div>
    </main>
  )
}

export default Home