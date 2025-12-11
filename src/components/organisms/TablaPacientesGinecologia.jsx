import React from "react";
import FilaPacienteGinecologia from "../molecules/FilaPacienteGinecologia";

export default function TablaPacientesGinecologia({ patients }) {
    return (
        <div className="tabla-envoltura">
            <div className="tabla-ginecontainer">
                <table className="tabla-ginepacientes">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Apellidos</th>
                            <th>DNI</th>
                            <th>Teléfono</th>
                            <th>Dirección</th>
                            <th>Fecha y Hora</th>
                            <th>Tipo de Cita</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patients.map((patient, index) => (
                            <FilaPacienteGinecologia
                                key={index}
                                patient={patient}
                                index={index}
                            />
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="tabla-ginefooter">
                Total de pacientes: <strong>{patients.length}</strong> / 80
            </div>
        </div>
    );
}
