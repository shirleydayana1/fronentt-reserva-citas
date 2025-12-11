export default function BadgeTipoCitaGinecologia({ tipo }) {
    return (
        <span className={`badge-tipo-cita ${tipo}`}>
            {tipo}
        </span>
    );
}
