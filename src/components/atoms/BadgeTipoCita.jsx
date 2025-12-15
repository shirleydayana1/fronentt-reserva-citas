

export default function BadgeTipoCita({ tipo }) {
    return (
        <span className={`badge badge-${tipo.replace(" ", "-")}`}>
            {tipo.charAt(0).toUpperCase() + tipo.slice(1)}
        </span>
    );
}