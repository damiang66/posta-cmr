import React from 'react';

export const ContactEdit = ({ isOpen, closeModal }) => {
  const handleAction = (action) => {
 
    console.log(`Realizando acción: ${action}`);
  };

  const handleCloseModal = () => {
    closeModal();
  };

  if (!isOpen) {
    return null; 
  }

  return (
    <div className="modal" style={{ display: 'flex', justifyContent: 'flex-end', height: '50%' }}>
      <div className="modal-content" style={{ width: '200px', borderRadius: '10px', backgroundColor: '#f9f9f9', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', padding: '10px', marginRight: '10px' }}>
        <span className="close" onClick={handleCloseModal}>
          &times;
        </span>

        <h2>Acciones</h2>

        <span onClick={() => handleAction('Ver contacto')} style={{ textDecoration: 'underline', cursor: 'pointer', color: 'gray' }}>
          Ver contacto
        </span>
        <span onClick={() => handleAction('Iniciar atención')} style={{ textDecoration: 'underline', cursor: 'pointer', color: 'gray' }}>
          Iniciar atención
        </span>
        <span onClick={() => handleAction('Editar este contacto')} style={{ textDecoration: 'underline', cursor: 'pointer', color: 'gray' }}>
          Editar este contacto
        </span>
        <span onClick={() => handleAction('Imprimir este contacto')} style={{ textDecoration: 'underline', cursor: 'pointer', color: 'gray' }}>
          Imprimir este contacto
        </span>
        <span onClick={() => handleAction('Iniciar proceso')} style={{ textDecoration: 'underline', cursor: 'pointer', color: 'gray' }}>
          Iniciar proceso
        </span>
        <span onClick={() => handleAction('Convertir a')} style={{ textDecoration: 'underline', cursor: 'pointer', color: 'gray' }}>
          Convertir a
        </span>
        <span onClick={() => handleAction('Agregar evento')} style={{ textDecoration: 'underline', cursor: 'pointer', color: 'gray' }}>
          Agregar evento
        </span>
      </div>
    </div>
  );
};
