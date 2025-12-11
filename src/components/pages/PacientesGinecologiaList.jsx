import TablaPacientesGinecologia from "../organisms/TablaPacientesGinecologia";
import { useNavigate } from "react-router-dom";

export default function PacientesGinecologiaList() {
    const navigate = useNavigate();

    let patients = [];
    try {
        const stored = localStorage.getItem("ginecologia_patients");
        patients = stored ? JSON.parse(stored).slice(0, 80) : [];
    } catch {
        patients = [];
    }

    return (
        <div className="pacientes-ginecologia-container">
            <div className="pacientes-ginecologia-header">
                <h1>Lista de Pacientes Ginecológicos</h1>
                <button
                    className="boton-volver"
                    onClick={() => navigate(-1)}
                >
                    ← Volver
                </button>
            </div>

            {patients.length === 0 ? (
                <p className="not-pacientes">
                    No hay pacientes registrados
                </p>
            ) : (
                <TablaPacientesGinecologia patients={patients} />
            )}
        </div>
    );
}
