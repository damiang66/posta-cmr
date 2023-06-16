import axios from "axios";
import React, { useState, useEffect } from 'react';
import { ContactEdit } from "./ContactEdit";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import { clienteFindAll, clienteFindByGenero } from "../service/ClienteService";

export const ClienteList=()=>{
    const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [registeredContact, setRegisteredContact] = useState(null);
  const [formData, setFormData] = useState({});
  const[tipo,setTipo]=useState(false);
  const[genero,setGenero]=useState(false);
  const [filterVisible, setFilterVisible] = useState(false);
  const [filterData, setFilterData] = useState({
    tipoCliente: '',
    generoChecked: false,
    ciudadChecked: false,
    productoChecked: false,
  });

  const [selectedContact, setSelectedContact] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalOpenFilter, setIsModalOpenFilter] = useState(false)
  const[activarFiltro,setActivarFiltro]=useState(false);
  const [pagina,setPagina]=useState(0);
  const[totalPagina,setTotalPagina]=useState(0);
  const[valorGenero,setValorGenero]=useState('');

  useEffect(() => {
  // fetchRegisteredContact();
   traerTodos()
  }, []);
  const GenderOptions = [
    { value: "MALE", label: "Male" },
    { value: "FEMALE", label: "Female" },
    { value: "LGBTQ", label: "LGBTQ+" },
];

  const fetchRegisteredContact = async () => {
    try {
      const params = {
        type: 'entrepreneur',
        ...formData,
        ...filterData,
      };

      const url = `http://ec2-3-141-31-192.us-east-2.compute.amazonaws.com:8080/clients/type/0?type=entrepreneur&tipoCliente=${params.tipoCliente}`;

      const response = await axios.get(url);
      setRegisteredContact(response.data.content);
    } catch (error) {
      console.error('Error al obtener los datos de la API:', error);
    }
  };
  const traerTodos = async(pagina=0)=>{
    console.log(pagina);
    try {
        const respuesta = await clienteFindAll(pagina);
        console.log(respuesta);
        setTotalPagina(respuesta.data.totalPages)
        setRegisteredContact(respuesta.data.content);
    } catch (error) {
        console.log(error);
    }
  }
  const cerrarFiltro= ()=>{
    setActivarFiltro(false);
    setGenero(false);
   // setTipo(false);
   traerTodos(0);
  }
  const cambiarFiltroGenero= async({target})=>{
    const{value}=target;
    setGenero(true);
    //console.log(value);
    setValorGenero(value);
    const respuesta = await clienteFindByGenero(pagina=0,value);
   // console.log(respuesta);
    setRegisteredContact(respuesta.data.content);
  }

  const handleOpenRegisterForm = () => {
    setShowRegisterForm(true);
    setRegisteredContact(null);
  };

  const handleCloseRegisterForm = () => {
    setShowRegisterForm(false);
  };

  const handleRegisterContact = (data) => {
    setFormData(data);
    setShowRegisterForm(false);
  };

  const handleOpenModal = (contact) => {
    setSelectedContact(contact);
    setModalOpen(true);
    console.log(contact)
  };
const paginarMas = async()=>{
    console.log(totalPagina)
    console.log(pagina);
    if(pagina<=totalPagina){
        setPagina(pagina+1);
        
        if(genero){
            console.log('genero');
            await clienteFindByGenero(pagina,valorGenero);
        }else{
            console.log('todos');
            await traerTodos(pagina);

        }
    }
   
}
const paginarMenos= async()=>{
    if (pagina>=0){
        setPagina(pagina-1);
        if(genero){
            console.log('genero');
            await clienteFindByGenero(pagina,valorGenero);
        }else{
            console.log('todos');
            await traerTodos(pagina);

        }
    }
}
  const handleOpenModalFilter = () => {
   // setIsModalOpenFilter(true);
 //   console.log('este es', handleOpenModalFilter)
 //Swal.fire('En reparacion', 'Esta seccion esta en reparacion', 'success')
 setActivarFiltro(true);
  }

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleCloseModalFilter = () => {
    setIsModalOpenFilter(false);
  }

    return (<>
  
    <div className="content-wrapper">
      <div className="banner" style={{ backgroundColor: '#abb8c3', color: 'white', padding: '20px', textAlign: 'center', borderRadius: 20 }}>
        BANNER
      </div>
      {/* Content Header (Page header) */}
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right" style={{ position: 'absolute' }}>
                <h1 className="m-0" style={{ fontWeight: 'bold' }}>Contactos</h1>
                <i className="fa fa-filter m-2" aria-hidden="true" onClick={() => handleOpenModalFilter()} />
              </ol>

            </div>
            

        



            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <NavLink to="/clientes/form"  style={{ borderRadius: 19, backgroundColor: '#00ff87' }} className="btn btn-success">
                  Nuevo Contacto +
                </NavLink>
              </ol>
              {activarFiltro&&( <div className="container">
            <label>
                        Gender:
                     
                        <select class="form-select" name="gender" onChange={cambiarFiltroGenero}  >
                            <option value="">Select</option>
                            {GenderOptions.map((option) => (
                                <option  key={option.value} value={option.value}  >
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </label>
                    <button onClick={()=>cerrarFiltro()} className="btn btn-danger btn-sm m-4">X</button>
            </div>)}
           

            </div>
          </div>
        </div>
      </div>
      {pagina<0?'':( <button onClick={paginarMenos} className="btn btn-primary btn-sm">atras</button>)}
     
      {pagina>=totalPagina?'':( <button onClick={paginarMas} className="btn btn-primary btn-sm m-3">adelante</button>)}
     
      {/* Main content */}
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body table-responsive p-0 f-1">
                  <table className="table table-striped table-valign-middle">
                    <thead>
                      <tr style={{ backgroundColor: '#bedadc', textAlign: 'center' }}>
                        <th>Nombre</th>
                        <th>Empresa/Idea</th>
                        <th>Producto/Servicio</th>
                        <th>Ciudad/Municipio</th>
                        <th>Tipo de Cliente</th>
                        <th>Ver más</th>
                      </tr>
                    </thead>
                    <tbody style={{ fontWeight: 'bold', textAlign: 'center' }}>
                      {registeredContact &&
                        registeredContact.length > 0 &&
                        registeredContact.map((item) => (
                          <tr key={item.id}>
                            <td style={{ color: 'red' }}>{item.name}</td>
                            <td>{item.businessIdea}</td>
                            <td>{item.product}</td>
                            <td>
                              {item.municipio?.name} - {item.municipio?.country}
                            </td>
                            <td style={{ background: '#9f0500', textAlign: 'center', borderRadius: 20, color: 'white', margin: 10, fontWeight: 'bold' }} className='btn btn-danger btn-sm btn-block'>
                              {item.type === 'entrepreneur' ? 'Emprendedor' : 'Empresario'}
                            </td>
                            <td>
                              <i className="fas fa-eye" onClick={() => handleOpenModal(item)}></i>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showRegisterForm && (
        <Register onClose={handleCloseRegisterForm} onRegister={handleRegisterContact} />
      )}
      {isModalOpen && (
        <ContactEdit isOpen={isModalOpen} closeModal={handleCloseModal} />
      )}
      {isModalOpenFilter && (
      <FilterModal isOpenFilter={isModalOpenFilter} closeModal={handleCloseModalFilter} />
      )}


    </div>

    </>)
}