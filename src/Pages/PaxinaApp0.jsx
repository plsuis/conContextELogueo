import { useDatosContext } from "../componentes/useDatosContext";

const PaxinaApp0 = () => {
  const {logout} = useDatosContext()
    return (<>
    <h1>PaxinaApp0</h1>
    <button onClick={logout}>Sair</button>
    </>
    );
  };
  
  
  export default PaxinaApp0;