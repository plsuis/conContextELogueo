import React from 'react';
import { useDatosContext } from './useDatosContext';
import PaxinaApp0 from '../Pages/PaxinaApp0';

function CambioPaxina({children}){
    const {nome} = useDatosContext()
    return(<>{(nome == "Israel") ? <PaxinaApp0 /> : children}</>)
}

export{
    CambioPaxina
}