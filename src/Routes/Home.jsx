import Card from '../Components/Card'
import { useDentistStates } from '../Components/utils/global.context'

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