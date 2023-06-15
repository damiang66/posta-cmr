import React, { useState } from 'react';

export const Advisory=({ isModalOpen, setIsModalOpen, handleOpenModal })=> {
    const [contact, setContact] = useState('');
    const [observations, setObservations] = useState('');

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleContactChange = (event) => {
        setContact(event.target.value);
    };

    const handleObservationsChange = (event) => {
        setObservations(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Contact:', contact);
        console.log('Observations:', observations);
        handleCloseModal();
    };
    return (
        <div>
            <button className="btn btn-danger btn-sm btn-block" style={{ marginRight: 20, borderRadius: 15, fontWeight: 'bold' }} onClick={handleOpenModal}>
                INICIAR ASESORIA
            </button>
            {isModalOpen && (
                <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
                    <div className="modal-dialog" style={{ maxWidth: '400px', marginTop: '10%', margin: '0 auto' }}>
                        <div className="modal-content">
                            <div className="modal-header" style={{textAlign: 'center'}}>
                                <h5 className="modal-title">Asesoría</h5>
                                <button type="button" className="close" onClick={handleCloseModal}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="contact" style={{ color: 'blue' }}>Agregar un contacto +</label>
                                        <input type="text" className="form-control" id="contact" value={contact} onChange={handleContactChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="observations">Observaciones</label>
                                        <textarea className="form-control" id="observations" rows="3" value={observations} onChange={handleObservationsChange} />
                                    </div>
                                    <div className="modal-footer" style={{ position: 'relative', alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                                        <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Cancelar</button>
                                    </div>
                                    <div className="modal-footer" style={{ position: 'relative', alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                                        <button type="submit" className="btn btn-danger">Iniciar Asesoria</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}