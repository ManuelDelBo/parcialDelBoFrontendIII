import { useState } from "react";
import Card from "./Components/Card";
import Error from "./Components/Error";

function App() {

  const [animal, setAnimal] = useState({
    especie: "",
    nombre: "",
});

const [show, setShow] = useState(false);
const [error, setError] = useState(false);

const handleSubmit = (event) => {
    event.preventDefault();
    if (animal.especie.trim().length > 3 && animal.nombre.trim().length < 6) {
    setShow(true);
    setError(false);
    } else {
    setError(true);
    setShow(false);
    }
};
  return (
    <div >
      <h1>¿Que animal sos?</h1>
      <>
        <form onSubmit={handleSubmit} style={{ backgroundColor: "grey" }}>
        <label>Especie::</label>
        <input
            type="text"
            value={animal.especie}
            onChange={(event) =>
            setAnimal({ ...animal, especie: event.target.value })
            }
        />
        <label>Tu nombre:</label>
        <input
            type="text"
            value={animal.nombre}
            onChange={(event) =>
            setAnimal({ ...animal, nombre: event.target.value })
            }
            />
            <button type="submit" style={{ backgroundColor: "green" }}>GUARDAR ANIMAL</button>
        </form>
        {show && <Card animal={animal} />}
        {error && <Error />}
        </>
    </div>
  );
}

export default App;
