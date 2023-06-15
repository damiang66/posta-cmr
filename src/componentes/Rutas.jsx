import { Route, Routes } from "react-router-dom"
import { ClienteList } from "../Cliente/componentes/ClienteList"
import { ClienteRegistrar } from "../Cliente/componentes/ClienteRegistrar"
import { EmprendedorForm } from "../Cliente/componentes/EmprendedorForm"

export const Rutas = () => {
    return (<>
        <Routes>
            <Route path="/" element={<ClienteList />} />
            <Route path="/clientes" element={<ClienteList />} />
            <Route path="/clientes/form" element={<ClienteRegistrar />} />
            <Route path="/emprendedor/form" element={<EmprendedorForm />} />
        </Routes>
    </>)
}