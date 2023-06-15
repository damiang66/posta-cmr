import { useState } from 'react';

import { EmprendedorForm } from './EmprendedorForm';

import { NavLink } from 'react-router-dom';
import { Empresario } from './Empresario';
export const ClienteRegistrar=()=>{

    const[variable,setVariable]=useState(true);
    const tipoCliente = ()=>{
        setVariable(false);
    }
    const tipoClienteEmpresario=()=>{
        setVariable(true)
       // Swal.fire('En reparacion', 'Se esta trabajando en esta seccion', 'success');
    }
    return (<>
    <div className="container">
    <h4>Registro de Clientes</h4>

    <button onClick={()=>tipoCliente()} type="button" className="btn btn-outline-danger"  >Emprendedor</button>
    <button  onClick={()=>tipoClienteEmpresario()} type="button" className="btn btn-outline-danger m-2">Empresario</button>
    <NavLink to="/clientes" className="btn btn-success m-2">Volver</NavLink>
{variable?(<Empresario/>):(<EmprendedorForm/>)}
               </div>
    </>)
}