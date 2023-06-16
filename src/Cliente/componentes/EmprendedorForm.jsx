import axios from 'axios';
import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { clienteEmprendedorSave } from '../service/ClienteService';
import Swal from 'sweetalert2';
export const EmprendedorForm = ()=>{

const navegar= useNavigate();
 
        const [formData, setFormData] = useState({
          name: '',
          lastName: '',
          gender: '',
          studyLevel: '',
          ethnicGroup: '',
          victimPopulation: false,
          disability: false,
          displacement: false,
          phone: '',
          email: '',
          address: '',
          remarks: '',
          active: '',
          type: [],
          regdate: '',
          updatedate: '',
          municipio: 0,
          businessIdea: '',
          product: '',
          nit: ''
        });
      
        const [municipios, setMunicipios] = useState([]);
        const [isLoading, setIsLoading] = useState(true);
        const [showForm, setShowForm] = useState(false);
        const [shouldHideForm, setShouldHideForm] = useState(false);
      
      
        const GenderOptions = [
          { value: "MALE", label: "Male" },
          { value: "FEMALE", label: "Female" },
          { value: "LGTBQ", label: "LGTBQ+" },
        ];
      
        const StudyLevelOptions = [
          { value: "SECUNDARIO", label: "Secundario" },
          { value: "TERCIARIO", label: "Terciario" },
          { value: "UNIVERSITARIO", label: "Universitario" },
        ];
      
        const EthnicGroupOptions = [
          { value: "ROM", label: "Rom" },
          { value: "INDIGENAS", label: "Indigenas" },
          { value: "AFROCOLOMBIANO", label: "Afrocolombiano" },
          { value: "RAIZALES", label: "Raizales" },
          { value: "OTRO", label: "Otro" },
        ];
      
      
        const victimPopulation = [
          { value: "true", label: "si" },
          { value: "false", label: "no" }
        ]
      
        const disability = [
          { value: "true", label: "si" },
          { value: "false", label: "no" }
        ]
      
        const displacement = [
          { value: "true", label: "si" },
          { value: "false", label: "no" }
        ]
      
      
        useEffect(() => {
          const fetchMunicipios = async () => {
            try {
              const response = await axios.get('http://ec2-3-141-31-192.us-east-2.compute.amazonaws.com:8080/clients/municipios');
              setMunicipios(response.data);
              console.log(response)
            } catch (error) {
              console.error(error);
            } finally {
              setIsLoading(false);
            }
          };
      
          fetchMunicipios();
        }, []);
      
      
        const handleChange = (e) => {
          const { name, value, type, checked } = e.target;
         
      
          setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
          }));
      
         
        };
      
        const handleSubmit = async (e) => {
          e.preventDefault();
       console.log(formData);
     try {
        const respuesta = await clienteEmprendedorSave(formData);
        Swal.fire('Creado:',`El Emprendedor ${respuesta.data.name} fue creado con exito`, 'success');
        console.log(respuesta);
        navegar('/clientes')
     } catch (error) {
        console.log(error);
     }
        };
      
        return (
          <div>
         
           
                
      
                {(!shouldHideForm || showForm) && (
                  <form onSubmit={handleSubmit}>
                    <h2 style={{ background: '#eb9694', color: 'red', fontSize: 18 }}>DATOS EMPRENDEDOR</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                      <div style={{ flexBasis: '50%' }}>
                        <label>
                          Nombre:
                          <br />
                          <input style={{ borderRadius: 5 }} type="text" name="name" value={formData.name} onChange={handleChange} />
                        </label>
                      </div>
                      <div style={{ flexBasis: '50%' }}>
                        <label>
                          Apellido:
                          <br />
                          <input style={{ borderRadius: 5 }} type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                        </label>
                      </div>
      
                      <div style={{ flexBasis: '50%' }}>
                        <label>
                          Gender:
                          <select name="gender" value={formData.gender} onChange={handleChange} required>
                            <option value="">Select</option>
                            {GenderOptions.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </label>
                        <br />
                        <label>
                          Study Level:
                          <select name="studyLevel" value={formData.studyLevel} onChange={handleChange} required>
                            <option value="">Select</option>
                            {StudyLevelOptions.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </label>
                        <br />
                        <label>
                          Ethnic Group:
                          <select name="ethnicGroup" value={formData.ethnicGroup} onChange={handleChange} required>
                            <option value="">Select</option>
                            {EthnicGroupOptions.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </label>
                      </div>
                      <div style={{ flexBasis: '50%' }}>
                        Poblacion Victima:
                        <select name="victimPopulation" value={formData.victimPopulation} onChange={handleChange} required>
                          <option value="">Select</option>
                          {victimPopulation.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
      
                      <div style={{ flexBasis: '50%' }}>
                      disability
                        Discapacidad:
                        <select name="gender" value={formData.disability} onChange={handleChange} required>
                          <option value="">Select</option>
                          {disability.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div style={{ flexBasis: '50%' }}>
                        Desplazamiento:
                        <select name="displacement" value={formData.displacement} onChange={handleChange} required>
                          <option value="">Select</option>
                          {displacement.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div style={{ flexBasis: '100%' }}>
                        <h2 style={{ background: '#eb9694', color: 'red', fontSize: 18 }}>DATOS IDEA DE NEGOCIO</h2>
                      </div>
                      <br />
                      <div style={{ flexBasis: '50%' }}>
                        <label>
                          Teléfono:
                          <br />
                          <input style={{ borderRadius: 5 }} type="text" name="phone" value={formData.phone} onChange={handleChange} />
                        </label>
                      </div>
                      <div style={{ flexBasis: '50%' }}>
                        <label>
                          Email:
                          <br />
                          <input style={{ borderRadius: 5 }} type="text" name="email" value={formData.email} onChange={handleChange} />
                        </label>
                      </div>
      
                      <div style={{ flexBasis: '50%' }}>
                        <label>
                          Dirección:
                          <br />
                          <input style={{ borderRadius: 5 }} type="text" name="address" value={formData.address} onChange={handleChange} />
                        </label>
                      </div>
                      <div style={{ flexBasis: '50%' }}>
                        <label>
                          Municipio:
                          <select name="municipio" value={formData.municipio} onChange={handleChange} required>
                            <option value="">Seleccionar municipios</option>
                            {municipios.map((municipio) => (
                              <option key={municipio.id} value={municipio.id}>
                                {municipio.name} - {municipio.country}
                              </option>
                            ))}
                          </select>
                        </label>
                      </div>
                      <div style={{ flexBasis: '50%' }}>
                        <label>
                          Idea de Negocio:
                          <br />
                          <input style={{ borderRadius: 5 }} type="text" name="businessIdea" value={formData.businessIdea} onChange={handleChange} />
                        </label>
                      </div>
                      <div style={{ flexBasis: '50%' }}>
                        <label>
                          Producto:
                          <br />
                          <input style={{ borderRadius: 5 }} type="text" name="product" value={formData.product} onChange={handleChange} />
                        </label>
                      </div>
      
                      <div style={{ flexBasis: '50%' }}>
                        <label>
                          NIT:
                          <br />
                          <input style={{ borderRadius: 5 }} type="text" name="nit" value={formData.nit} onChange={handleChange} />
                        </label>
                      </div>
                      <div style={{ flexBasis: '50%' }}>
                        <label>
                          <br />
                          <textarea placeholder='Tema/Observaciones' name="remarks" value={formData.remarks} onChange={handleChange} style={{ width: '300%', borderRadius: 5 }} />
                        </label>
                      </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                      <button type="submit" style={{ background: 'red', borderRadius: 5, color: 'white' }}>Registrar</button>
                      <NavLink to="/clientes" className="btn btn-success ">Volver</NavLink>
                    </div>
                   
                  </form>
                )}
           
                          
          </div>
        )}

