import { useState } from 'react';
import { useDatosContext } from '../componentes/useDatosContext';

const Logueo = () => {
    const { login } = useDatosContext();
    const [inputs, setInputs] = useState({});
    const [isPermiso,setPermiso] = useState(false);
    
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    login(inputs)
  }

  return (<>
  <form onSubmit={handleSubmit}>
      <label>Introduce o teu nome:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Introduce a túa idade:
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>
  </>
    
  )
  };
  
  export default Logueo;