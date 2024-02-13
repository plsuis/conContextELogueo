import React,{createContext,useState} from 'react';
import { useNavigate } from 'react-router-dom';
export const LocalContext = createContext(); // inicializo
//
function Proveedorcontexto({children}){
    const [nome,setNome] = useState("")
    let navigate = useNavigate();
    const login=(dato)=>{
        console.log("estou en Proveedorcontexto en login: ",dato.username)
        if(dato.username == 'Israel'){
            console.log('estou dentro de filtro: ',dato.username)
            setNome(dato.username)
            navigate('/paxinaapp0')
        }
    }
    const logout =(dato)=>{
        console.log("estou en Proveedorcontexto en logout: ",dato)
        setNome("")
        navigate('./')
    }
    
    return (
        <LocalContext.Provider value={{login,logout,nome}}>
            {children}
        </LocalContext.Provider>
    )
}

export{
    Proveedorcontexto
}