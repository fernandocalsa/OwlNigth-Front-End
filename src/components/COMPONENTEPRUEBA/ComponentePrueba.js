import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Componente.css"

function MyComponent() {
    const [locals, setLocals] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:4000/locals'); // Cambia la URL a tu endpoint en el backend
            setLocals(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (

        <>
            <div>
                <h1>Data from Backend</h1>
                <ul>
                    {locals.map(local => (
                        <ul>
                            <li key={local.id}>{local.discoName}</li>
                            <li key={local.id}>{local.deals}€</li>
                            <li key={local.id}><img alt="portada local" src={local.imgUrl} /></li>
                        </ul>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default MyComponent;

//EL COMPONENTE PRUEBA ME FUNCIONA!
