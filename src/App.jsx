
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
//llamado al home para probarlo

function App() {
  return (
      <div className="App">
          <Navbar/>
          <Home/>
          <Footer/>
      </div>
  );
}

export default App;
