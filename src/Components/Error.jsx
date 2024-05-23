import React from "react";

const Error = () => {
    return (
    <div style={{ backgroundColor: "red" }}>
        <h3>
        Por favor chequea que la información sea correcta:
        </h3>
        <h4>
        -La especie debe ser mayor a 3 caracteres.
        </h4>
        <h4>
        -El nombre debe tener un maximo de 6 caracteres.
        </h4>
    </div>
    );
};

export default Error;