import FilaPacienteConsultoria from "../molecules/FilaPacienteConsultoria";

export default function TablaPacientesConsultoria({
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
        <div className="tabla-consultoria-wrapper">
            <table className="tabla-consultoria">
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
                        <th>Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    {patients.map((patient, index) => (
                        <FilaPacienteConsultoria
                            key={index}
                            patient={patient}
                            index={index}
                            isEditing={editingIndex === index}
                            editForm={editForm}
                            onEditChange={onEditChange}
                            onEditar={onEditar}
                            onEliminar={onEliminar}
                            onGuardar={onGuardar}
                            onCancelar={onCancelar}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}
