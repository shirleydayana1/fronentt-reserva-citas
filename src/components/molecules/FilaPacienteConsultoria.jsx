import React from "react";
import BadgeTipoCitaConsultoria from "../atoms/BadgeTipoCitaConsultoria";

export default function FilaPacienteConsultoria({
    patient,
    index,
    isEditing,
    editForm,
    onEditChange,
    onEditar,
    onEliminar,
    onGuardar,
    onCancelar
}) {
    const formatearFecha = (fechaHora) => {
        if (!fechaHora) return "No asignada";
        return new Date(fechaHora).toLocaleString("es-ES", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    if (isEditing) {
        return (
            <tr className="editing-row">
                <td>{index + 1}</td>

                <td>
                    <input
                        name="nombre"
                        value={editForm.nombre}
                        onChange={onEditChange}
                        className="edit-input"
                    />
                </td>

                <td>
                    <input
                        name="apellido"
                        value={editForm.apellido}
                        onChange={onEditChange}
                        className="edit-input"
                    />
                </td>

                <td>
                    <input
                        name="dni"
                        value={editForm.dni}
                        onChange={onEditChange}
                        className="edit-input"
                    />
                </td>

                <td>
                    <input
                        name="telefono"
                        value={editForm.telefono}
                        onChange={onEditChange}
                        className="edit-input"
                    />
                </td>

                <td>
                    <input
                        name="direccion"
                        value={editForm.direccion}
                        onChange={onEditChange}
                        className="edit-input"
                    />
                </td>

                <td>
                    <input
                        type="datetime-local"
                        name="fechaHora"
                        value={editForm.fechaHora || ""}
                        onChange={onEditChange}
                        className="edit-input"
                    />
                </td>

                <td>
                    <select
                        name="tipoCita"
                        value={editForm.tipoCita}
                        onChange={onEditChange}
                        className="edit-select"
                    >
                        <option value="control">Control</option>
                        <option value="emergencia">Emergencia</option>
                        <option value="primera">Primera vez</option>
                        <option value="procedimientos">Procedimientos</option>
                    </select>
                </td>

                <td>
                    <div className="btn-group">
                        <button
                            className="btn-guardar"
                            onClick={() => onGuardar(index)}
                        >
                            Guardar
                        </button>

                        <button
                            className="btn-cancelar"
                            onClick={onCancelar}
                        >
                            Cancelar
                        </button>
                    </div>
                </td>
            </tr>
        );
    }

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{patient.nombre}</td>
            <td>{patient.apellido}</td>
            <td>{patient.dni}</td>
            <td>{patient.telefono || "—"}</td>
            <td>{patient.direccion || "—"}</td>
            <td>{formatearFecha(patient.fechaHora)}</td>
            <td>
                <BadgeTipoCitaConsultoria tipo={patient.tipoCita} />
            </td>
            <td>
                <div className="btn-group">
                    <button
                        className="btn-editar"
                        onClick={() => onEditar(index)}
                    >
                        Editar
                    </button>

                    <button
                        className="btn-eliminar"
                        onClick={() => onEliminar(index)}
                    >
                        Eliminar
                    </button>
                </div>
            </td>
        </tr>
    );
}
