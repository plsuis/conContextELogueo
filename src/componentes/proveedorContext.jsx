import React,{createContext} from 'react';
import { useNavigate } from 'react-router-dom';
export const LocalContext = createContext(); // inicializo

function Proveedorcontexto({children}){
    let navigate = useNavigate();
    const login=(dato)=>{
        console.log("estou en Proveedorcontexto en login: ",dato.username)
        if(dato.username == 'Israel'){
            console.log('estou dentro de filtro: ',dato.username)
            navigate('/paxinaapp0')
        }
    }
    const logout =(dato)=>{
        console.log("estou en Proveedorcontexto en logout: ",dato)
        return dato
    }
    
    return (
        <LocalContext.Provider value={{login,logout}}>
            {children}
        </LocalContext.Provider>
    )
}

export{
    Proveedorcontexto
}