import React from "react";
import BadgeTipoCitaGinecologia from "../atoms/BadgeTipoCitaGinecologia";

export default function FilaPacienteGinecologia({ patient, index }) {

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
                <BadgeTipoCitaGinecologia tipo={patient.tipoCita} />
            </td>
        </tr>
    );
}
