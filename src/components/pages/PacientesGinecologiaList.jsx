import React, { useState } from "react";
import TablaPacientesGinecologia from "../organisms/TablaPacientesGinecologia";
import { useNavigate } from "react-router-dom";

export default function PacientesGinecologiaList() {
    const navigate = useNavigate();

    const [patients, setPatients] = useState(() => {
        const storedPatients = localStorage.getItem("ginecologia_patients");
        return storedPatients ? JSON.parse(storedPatients).slice(0, 80) : [];
    });

    const [editingIndex, setEditingIndex] = useState(null);
    const [editForm, setEditForm] = useState({});

    // ELIMINAR
    const eliminarPaciente = (index) => {
        const confirmacion = window.confirm(
            "¿Está seguro de eliminar este paciente ginecológico?"
        );

        if (confirmacion) {
            const updated = patients.filter((_, i) => i !== index);
            localStorage.setItem("ginecologia_patients", JSON.stringify(updated));
            setPatients(updated);
        }
    };

    // EDITAR
    const  editarPaciente = (index) => {
        setEditingIndex(index);
        setEditForm({ ...patients[index] });
    };

    // GUARDAR
    const guardarEdicion = (index) => {
        const updated = [...patients];
        updated[index] = editForm;

        localStorage.setItem("ginecologia_patients", JSON.stringify(updated));
        setPatients(updated);

        setEditingIndex(null);
        setEditForm({});
    };

    // CANCELAR
    const cancelarEdicion = () => {
        setEditingIndex(null);
        setEditForm({});
    };

    // CAMBIOS EN INPUTS
    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditForm({ ...editForm, [name]: value });
    };

    return (
        <div className="pacientes-ginecologia-container">
            <div className="pacientes-ginecologia-header">
                <h1>Pacientes de Ginecología</h1>

                <button
                    onClick={() => navigate(-1)}
                    className="btn-volver-ginecologia"
                >
                    ← Volver
                </button>
            </div>

            {patients.length === 0 ? (
                <div className="no-pacientes-ginecologia">
                    <p>No hay pacientes registrados</p>
                </div>
            ) : (
                <TablaPacientesGinecologia
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
