import React, { useState } from "react";
import TablaPacientes from "../organisms/TablaPacientes";

export default function PacientesList() {



    const [patients, setPatients] = useState(() => {
        const storedPatients = localStorage.getItem("patients");
        return storedPatients ? JSON.parse(storedPatients) : [];
    });

    const [editingIndex, setEditingIndex] = useState(null);
    const [editForm, setEditForm] = useState({});

    
    const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);
    const [indiceAEliminar, setIndiceAEliminar] = useState(null);

    
    const eliminarPaciente = (index) => {
        setIndiceAEliminar(index);
        setMostrarConfirmacion(true);
    };

    
    const confirmarEliminar = () => {
        const updated = patients.filter((_, i) => i !== indiceAEliminar);
        localStorage.setItem("patients", JSON.stringify(updated));
        setPatients(updated);

        setMostrarConfirmacion(false);
        setIndiceAEliminar(null);
    };

    const editarPaciente = (index) => {
        setEditingIndex(index);
        setEditForm({ ...patients[index] });
    };

    const guardarEdicion = (index) => {
        const updated = [...patients];
        updated[index] = editForm;
        localStorage.setItem("patients", JSON.stringify(updated));
        setPatients(updated);
        setEditingIndex(null);
        setEditForm({});
    };

    const cancelarEdicion = () => {
        setEditingIndex(null);
        setEditForm({});
    };

    const handleEditChange = (e) => {
        setEditForm({ ...editForm, [e.target.name]: e.target.value });
    };

    const volver = () => {
        window.history.back();
    };

    
    return (
        <div className="pacientes-list-container">

          
            <div className="pacientes-header">
                <h1>Pacientes de Pediatría</h1>
                <button onClick={volver} className="btn-volver">
                    ← Volver
                </button>
            </div>

          
            {patients.length === 0 ? (
                <div className="no-pacientes">
                    <p>No hay pacientes registrados</p>
                </div>
            ) : (
                <TablaPacientes
                    patients={patients}
                    onEliminar={eliminarPaciente}
                    onEditar={editarPaciente}
                    editingIndex={editingIndex}
                    editForm={editForm}
                    onEditChange={handleEditChange}
                    onGuardar={guardarEdicion}
                    onCancelar={cancelarEdicion}
                />
            )}

           
            {mostrarConfirmacion && (
                <div className="modal-overlay">
                    <div className="modal-confirm">
                        <h3>Confirmar eliminación</h3>
                        <p>¿Está seguro de eliminar este paciente?</p>

                        <div className="modal-buttons">
                            <button
                                className="btn-confirmar"
                                onClick={confirmarEliminar}
                            >
                                Aceptar
                            </button>
                            <button
                                className="btn-cancelar"
                                onClick={() => setMostrarConfirmacion(false)}
                            >
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}
