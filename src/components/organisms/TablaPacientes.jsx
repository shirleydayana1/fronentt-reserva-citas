import React from "react";
import FilaPaciente from "../molecules/FilaPaciente";

export default function TablaPacientes({ 
    patients, 
    onEliminar, 
    onEditar,
    editingIndex,
    editForm,
    onEditChange,
    onGuardar,
    onCancelar
}) {
    return (
        <div className="tabla-wrapper">
            <div className="tabla-container">
                <table className="tabla-pacientes">
                    <thead className="fila-text">
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Apellidos</th>
                            <th>DNI</th>
                            <th>Teléfono</th>
                            <th>Dirección</th>
                            <th>Fecha y Hora</th>
                            <th>Tipo de Cita</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patients.map((patient, index) => (
                            <FilaPaciente
                                key={index}
                                patient={patient}
                                index={index}
                                onEliminar={onEliminar}
                                onEditar={onEditar}
                                isEditing={editingIndex === index}
                                editForm={editForm}
                                onEditChange={onEditChange}
                                onGuardar={onGuardar}
                                onCancelar={onCancelar}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="tabla-footer">
                Total de pacientes: <strong>{patients.length}</strong>
            </div>
        </div>
    );
}