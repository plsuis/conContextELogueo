import React,{useContext} from 'react';
import { LocalContext } from './proveedorContext';

function useDatosContext() {
    return useContext(LocalContext);
  }

export {
    useDatosContext
}