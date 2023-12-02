import { Route, Routes } from 'react-router-dom';
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Favs from './Routes/Favs';
import Contact from './Routes/Contact';
import Home from './Routes/Home';
import Detail from './Routes/Detail';
import { useDentistStates } from './Components/utils/global.context'

function App() {
  const {state} = useDentistStates()

  return (
      <div className={state.theme ? "dark" : "light" }>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/favs' element={<Favs/>}/>
            <Route path='/detail/:id' element={<Detail />} />
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
