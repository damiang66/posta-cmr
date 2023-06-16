import axios from "axios";


//const urlbusqueda = `http://ec2-3-141-31-192.us-east-2.compute.amazonaws.com:8080/clients/type/0?type=entrepreneur&tipoCliente=${params.tipoCliente}`;

const url ='http://ec2-3-141-31-192.us-east-2.compute.amazonaws.com:8080/clients'
export const clienteFindAll= async(page)=>{
    console.log('todos');
    try {
        return await axios.get(`${url}/paginar/${page}`);
    } catch (error) {
       throw error; 
    }
}
export const clienteFindByGenero=async(page,genero)=>{
    console.log(genero);
    try {
        return await axios.get(`${url}/gender/${page}?gender=${genero}`)
    } catch (error) {
        throw error;
    }
}

export const clienteEmprendedorSave =async(emprendedor)=>{
    const{
        name,
        lastName,
        gender,
        studyLevel,
        ethnicGroup,
        victimPopulation,
        disability,
        displacement,
        phone,
        email,
        address,
        remarks,
        active,
        type,
        regdate,
        updatedate,
        municipio,
        businessIdea,
        product,
        nit
    }=emprendedor;
    try {
        return await axios.post(`${url}/entrepreneur`,{
            name,
        lastName,
        gender,
        studyLevel,
        ethnicGroup,
        victimPopulation,
        disability,
        displacement,
        phone,
        email,
        address,
        remarks,
        active,
      
        regdate,
        updatedate,
        municipio:{
            id:municipio,
        },
        businessIdea,
        product,
        nit
        });
    } catch (error) {
        throw error;
    }
}
export const clienteEmpresaSave=async(empresa)=>{
    console.log('desde el service',empresa);

 
    const {
        name,
        lastName,
        gender,
        studyLevel,
        ethnicGroup,
        victimPopulation,
        disability,
        displacement,
        phone,
        municipio,
        email,
        address,
        remarks,
        regdate,
        updatedate,
        contracting,
        companyName,
        fechaAlta,
        typeOfCompany,
        employeePartTime,

        employeeFullTime,
        registroMercantil,
        numberMercantilRegistry,
        nit
    } = empresa;
    console.log(disability);
    
    try {
        return await axios.post(`${url}/businessman`,{
       
            name,
            lastName,
            gender,
            studyLevel,
            ethnicGroup,
            victimPopulation,
            disability,
            displacement,
            phone,
            municipio:{
                id:municipio,
            },
            email,
            address,
            remarks,
            regdate,
            updatedate,
            contracting,
            companyName,
            fechaAlta,
            typeOfCompany,
            employeePartTime,
            disability:false,
            employeeFullTime,
            registroMercantil,
            numberMercantilRegistry,
            nit
           
        })
    } catch (error) {
        throw error;
    }
}
export const clienteById = async(id)=>{
    try {
        return await axios.get(`${url}/${id}`);
        
    } catch (error) {
        throw error;
    }
}