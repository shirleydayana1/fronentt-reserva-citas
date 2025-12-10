import React from "react";
import BadgeTipoCita from "../atoms/BadgeTipoCitaGinecologia";

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
        const month = String(fecha.getMonth() + 1).padStart(2, '0');
        const day = String(fecha.getDate()).padStart(2, '0');
        const hours = String(fecha.getHours()).padStart(2, '0');
        const minutes = String(fecha.getMinutes()).padStart(2, '0');
        return `${year}-${month}-${day}T${hours}:${minutes}`;
    };

    if (isEditing) {
        return (
            <tr className="edicion-row">
                <td>{index + 1}</td>
                <td>
                    <input 
                        type="text"
                        name="nombre"
                        value={editForm.nombre}
                        onChange={onEditChange}
                        className="editar-input"
                    />
                </td>
                <td>
                    <input 
                        type="text"
                        name="apellido"
                        value={editForm.apellido}
                        onChange={onEditChange}
                        className="editar-input"
                    />
                </td>
                <td>
                    <input 
                        type="text"
                        name="dni"
                        value={editForm.dni}
                        onChange={onEditChange}
                        className="editar-input"
                    />
                </td>
                <td>
                    <input 
                        type="text"
                        name="telefono"
                        value={editForm.telefono}
                        onChange={onEditChange}
                        className="editar-input"
                    />
                </td>
                <td>
                    <input 
                        type="text"
                        name="direccion"
                        value={editForm.direccion}
                        onChange={onEditChange}
                        className="editar-input"
                    />
                </td>
                <td>
                    <input 
                        type="datetiempo-local"
                        name="fechaHora"
                        value={formatearFechaParaInput(editForm.fechaHora)}
                        onChange={onEditChange}
                        className="editar-input"
                    />
                </td>
                <td>
                    <select 
                        name="tipoCita"
                        value={editForm.tipoCita}
                        onChange={onEditChange}
                        className="editar-select"
                    >
                        <option value="control">Control</option>
                        <option value="emergencia">Emergencia</option>
                        <option value="primera vez">Primera vez</option>
                        <option value="procedimientos">Procedimientos</option>
                    </select>
                </td>
                <td>
                    <div className="boton-group">
                        <button
                            onClick={() => onGuardar(index)}
                            className="boton-guardar"
                        >
                            Guardar
                        </button>
                        <button
                            onClick={onCancelar}
                            className="boton-cancelar"
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
            <td>{patient.telefono || "N/A"}</td>
            <td>{patient.direccion || "N/A"}</td>
            <td>{formatearFecha(patient.fechaHora)}</td>
            <td>
                <BadgeTipoCita tipo={patient.tipoCita} />
            </td>
            <td>
                <div className="boton-group">
                    <button
                        onClick={() => onEditar(index)}
                        className="boton-editar"
                    >
                        Editar
                    </button>
                    <button
                        onClick={() => onEliminar(index)}
                        className="boton-eliminar"
                    >
                        Eliminar
                    </button>
                </div>
            </td>
        </tr>
    );
}