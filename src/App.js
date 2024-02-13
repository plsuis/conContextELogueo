import './App.css';
import { BrowserRouter } from "react-router-dom";

import { Proveedorcontexto } from './componentes/proveedorContext';
import Rutas from './componentes/Rutas';
import { CambioPaxina } from './componentes/CambioPaxina';
function App() {
  return (
    <div className="App">
      
        <BrowserRouter>
          <Proveedorcontexto>
            <CambioPaxina>
              <Rutas />
            </CambioPaxina>
          </Proveedorcontexto>
        </BrowserRouter>
      
     
    </div>
  );
}

export default App;
