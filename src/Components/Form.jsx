import { useState } from "react";
import Alert from '@mui/material/Alert';

const Form = () => {
  const [userData, setUserData] = useState({
      name: '',
      email: ''
    }
  )
  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)


  const handleSumbit = (event) => {
    event.preventDefault()
    const regex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    if(regex.test(userData.email) && userData.name.length > 5){
        setShow(true)
        setError(false)
    } else {
        setError(true)
        setShow(false)
    } 
  }

  
  return (
    <div>
        {!show && 
            <form onSubmit={handleSumbit} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <label>Full name</label>
                <input type="text" value={userData.nombre} onChange={(event) => setUserData({...userData, name: event.target.value})}/>
                <label>Email</label>
                <input type="text" value={userData.email} onChange={(event) => setUserData({...userData, email: event.target.value})}/>
                <button>Send</button>
            </form>}
        {show && <Alert severity="success">Gracias {userData.name} te contactaremos cuanto antes vía mail</Alert>}
        {error && <Alert severity="error">Por favor verifique su información nuevamente</Alert>}
    </div>
  );
};

export default Form;
