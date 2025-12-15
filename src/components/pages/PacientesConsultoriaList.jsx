import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TablaPacientesConsultoria from "../organisms/TablaPacientesConsultoria";

export default function PacientesConsultoriaList() {
    const navigate = useNavigate();

    const [patients, setPatients] = useState(() => {
        try {
            const stored = localStorage.getItem("consultoria_patients");
            return stored ? JSON.parse(stored).slice(0, 80) : [];
        } catch {
            return [];
        }
    });

    const [editingIndex, setEditingIndex] = useState(null);
    const [editForm, setEditForm] = useState({});

    /* EDITAR*/
    const onEditar = (index) => {
        setEditingIndex(index);
        setEditForm({ ...patients[index] });
    };


    const onEditChange = (e) => {
        const { name, value } = e.target;
        setEditForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    /* GUARDAR */
    const onGuardar = (index) => {
        const updated = [...patients];
        updated[index] = editForm;

        setPatients(updated);
        localStorage.setItem(
            "consultoria_patients",
            JSON.stringify(updated)
        );

        setEditingIndex(null);
        setEditForm({});
    };

    /* CANCELAR*/
    const onCancelar = () => {
        setEditingIndex(null);
        setEditForm({});
    };

    /* ELIMINAR */
    const onEliminar = (index) => {
        if (!window.confirm("¿Eliminar este paciente?")) return;

        const updated = patients.filter((_, i) => i !== index);

        setPatients(updated);
        localStorage.setItem(
            "consultoria_patients",
            JSON.stringify(updated)
        );
    };

    return (
        <div className="pacientes-consultoria-container">
            <div className="pacientes-consultoria-header">
                <h2>Pacientes - Consultoría Médica</h2>
                <button onClick={() => navigate(-1)}>← Volver</button>
            </div>

            {patients.length === 0 ? (
                <p>No hay pacientes registrados</p>
            ) : (
                <TablaPacientesConsultoria
                    patients={patients}
                    editingIndex={editingIndex}
                    editForm={editForm}
                    onEditar={onEditar}
                    onEliminar={onEliminar}
                    onEditChange={onEditChange}
                    onGuardar={onGuardar}
                    onCancelar={onCancelar}
                />
            )}
        </div>
    );
}
