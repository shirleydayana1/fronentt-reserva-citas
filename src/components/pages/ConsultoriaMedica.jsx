import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";

registerLocale("es", es);

export default function ConsultoriaMedica() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        nombre: "",
        apellido: "",
        dni: "",
        telefono: "",
        direccion: "",
        fechaHora: "",
        tipoCita: "control",
    });

    const [patients, setPatients] = useState(
        JSON.parse(localStorage.getItem("consultoria_patients")) || []
    );

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const agregarPaciente = () => {
        if (!form.nombre || !form.apellido || !form.dni) {
            alert("Complete los campos obligatorios");
            return;
        }

        if (patients.length >= 80) {
            alert("Solo se pueden registrar hasta 80 pacientes");
            return;
        }

        const updated = [...patients, form];
        localStorage.setItem("consultoria_patients", JSON.stringify(updated));
        setPatients(updated);

        alert("Paciente agregado correctamente");

        setForm({
            nombre: "",
            apellido: "",
            dni: "",
            telefono: "",
            direccion: "",
            fechaHora: "",
            tipoCita: "control",
        });
    };

    const verPacientes = () => {
        navigate("/consultoria/pacientes");
    };

    return (
        <div className="consultoria-container">

            
            <div className="consultoria-imagen-box">
                <img
                    src="/img/consultoria.jpg"
                    alt="Consultoría Médica"
                    className="consultoria-imagen"
                />
            </div>

            <div className="calendar-box">
                <DatePicker
                    selected={new Date()}
                    onChange={() => {}}
                    inline
                    locale="es"
                />
            </div>

            
            <div className="form-box">

                <div className="form-row">
                    <input
                        name="nombre"
                        value={form.nombre}
                        onChange={handleChange}
                        placeholder="Nombre"
                    />
                    <input
                        name="apellido"
                        value={form.apellido}
                        onChange={handleChange}
                        placeholder="Apellidos"
                    />
                </div>

                <div className="form-row">
                    <input
                        name="dni"
                        value={form.dni}
                        onChange={handleChange}
                        placeholder="DNI"
                    />
                    <input
                        name="telefono"
                        value={form.telefono}
                        onChange={handleChange}
                        placeholder="Teléfono"
                    />
                </div>

                <input
                    name="direccion"
                    value={form.direccion}
                    onChange={handleChange}
                    placeholder="Dirección"
                />

                <label>Fecha y hora:</label>
                <input
                    type="datetime-local"
                    name="fechaHora"
                    value={form.fechaHora}
                    onChange={handleChange}
                />

                <label>Tipo de cita:</label>
                <select
                    name="tipoCita"
                    value={form.tipoCita}
                    onChange={handleChange}
                >
                    <option value="control">Control</option>
                    <option value="emergencia">Emergencia</option>
                    <option value="primera vez">Primera vez</option>
                    <option value="procedimientos">Procedimientos</option>
                </select>

                <div className="form-buttons">
                    <button onClick={agregarPaciente}>Agregar</button>
                    <button onClick={verPacientes}>Ver</button>
                </div>

            </div>
        </div>
    );
}
