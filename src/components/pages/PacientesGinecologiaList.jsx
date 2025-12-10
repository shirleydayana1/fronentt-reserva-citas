import React, { useState } from "react";
import TablaPacientes from "../organisms/TablaPacientesGinecologia";

export default function PacientesGinecologiaList() {
    const [patients, setPatients] = useState(() => {
        const storedPatients = localStorage.getItem("patients");
        return storedPatients ? JSON.parse(storedPatients) : [];
    });

    const [editingIndex, setEditingIndex] = useState(null);
    const [editForm, setEditForm] = useState({});

    const eliminarPaciente = (index) => {
        const confirmacion = window.confirm("¿Está seguro de eliminar este paciente?");
        if (confirmacion) {
            const updated = patients.filter((_, i) => i !== index);
            localStorage.setItem("patients", JSON.stringify(updated));
            setPatients(updated);
        }
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
        <div className="pacientes-ginecologia-container">
            <div className="pacientes-ginecologia-header">
                <h1>Lista de Pacientes Ginecologia</h1>
                <button onClick={volver} className="boton-volver">
                    ← Volver
                </button>
            </div>

            {patients.length === 0 ? (
                <div className="not-pacientes">
                    <p>📋 No hay pacientes registrados</p>
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
        </div>
    );
}