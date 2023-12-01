import { Route, Routes } from 'react-router-dom';
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Favs from './Routes/Favs';
import Contact from './Routes/Contact';
import Home from './Routes/Home';
import Detail from './Routes/Detail';
//className="App", la cambie para probar los estilos darks, creo que podría ser facil cambiar desde aca la clase según el theme
function App() {
  return (
      <div className="dark">
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/favs' element={<Favs/>}/>
            <Route path='/detail/:id' element={<Detail />} />
            {/*<Route path='*' element={<PageNotFound/>}/>*/}
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
