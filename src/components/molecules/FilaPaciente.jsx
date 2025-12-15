import React from "react";
import BadgeTipoCita from "../atoms/BadgeTipoCita";

export default function FilaPaciente({ 
    patient, 
    index, 
    onEliminar, 
    onEditar,
    isEditing,
    editForm,
    onEditChange,
    onGuardar,
    onCancelar
}) {

    const formatearFecha = (fechaHora) => {
        if (!fechaHora) return "No especificada";
        const fecha = new Date(fechaHora);
        return fecha.toLocaleString("es-ES", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        });
    };

    const formatearFechaParaInput = (fechaHora) => {
        if (!fechaHora) return "";
        const fecha = new Date(fechaHora);
        const year = fecha.getFullYear();
        const month = String(fecha.getMonth() + 1).padStart(2, "0");
        const day = String(fecha.getDate()).padStart(2, "0");
        const hours = String(fecha.getHours()).padStart(2, "0");
        const minutes = String(fecha.getMinutes()).padStart(2, "0");
        return `${year}-${month}-${day}T${hours}:${minutes}`;
    };


    if (isEditing) {
        return (
            <tr className="fila-paciente editing-row">
                <td className="col-index">{index + 1}</td>

                <td className="col-text">
                    <input
                        type="text"
                        name="nombre"
                        value={editForm.nombre}
                        onChange={onEditChange}
                        className="edit-input"
                    />
                </td>

                <td className="col-text">
                    <input
                        type="text"
                        name="apellido"
                        value={editForm.apellido}
                        onChange={onEditChange}
                        className="edit-input"
                    />
                </td>

                <td className="col-dni">
                    <input
                        type="text"
                        name="dni"
                        value={editForm.dni}
                        onChange={onEditChange}
                        className="edit-input"
                    />
                </td>

                <td className="col-phone">
                    <input
                        type="text"
                        name="telefono"
                        value={editForm.telefono}
                        onChange={onEditChange}
                        className="edit-input"
                    />
                </td>

                <td className="col-address">
                    <input
                        type="text"
                        name="direccion"
                        value={editForm.direccion}
                        onChange={onEditChange}
                        className="edit-input"
                    />
                </td>

                <td className="col-date">
                    <input
                        type="datetime-local"
                        name="fechaHora"
                        value={formatearFechaParaInput(editForm.fechaHora)}
                        onChange={onEditChange}
                        className="edit-input"
                    />
                </td>

                <td className="col-badge">
                    <select
                        name="tipoCita"
                        value={editForm.tipoCita}
                        onChange={onEditChange}
                        className="edit-select"
                    >
                        <option value="control">Control</option>
                        <option value="emergencia">Emergencia</option>
                        <option value="primera vez">Primera vez</option>
                        <option value="procedimientos">Procedimientos</option>
                    </select>
                </td>

                <td className="col-actions">
                    <div className="btn-group">
                        <button
                            onClick={() => onGuardar(index)}
                            className="btn-guardar"
                        >
                            Guardar
                        </button>
                        <button
                            onClick={onCancelar}
                            className="btn-cancelar"
                        >
                            Cancelar
                        </button>
                    </div>
                </td>
            </tr>
        );
    }

    
    return (
        <tr className="fila-paciente">
            <td className="col-index">{index + 1}</td>
            <td className="col-text">{patient.nombre}</td>
            <td className="col-text">{patient.apellido}</td>
            <td className="col-dni">{patient.dni}</td>
            <td className="col-phone">{patient.telefono || "N/A"}</td>
            <td className="col-address">{patient.direccion || "N/A"}</td>
            <td className="col-date">{formatearFecha(patient.fechaHora)}</td>
            <td className="col-badge">
                <BadgeTipoCita tipo={patient.tipoCita} />
            </td>
            <td className="col-actions">
                <div className="btn-group">
                    <button
                        onClick={() => onEditar(index)}
                        className="btn-editar"
                    >
                        Editar
                    </button>
                    <button
                        onClick={() => onEliminar(index)}
                        className="btn-eliminar"
                    >
                        Eliminar
                    </button>
                </div>
            </td>
        </tr>
    );
}
