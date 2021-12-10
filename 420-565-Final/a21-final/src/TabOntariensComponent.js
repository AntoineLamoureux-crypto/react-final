import { React, useState, useEffect } from "react";
import Client from "./Client.js"

function TabOntariensComponent() {

    const [clientsON, setClientsON] = useState([]);

    useEffect(() => {
        fetch(
            "http://localhost:9090/get/All/clients/in/ontario",
            {
              method: "GET",
              headers: {
                "Content-type": "application/json",
              },
            }
          ) .then(response => response.json())
          .then(data => setClientsON(data));
    }, [clientsON]);


    return (

        <div>
            <h1>Liste des ontariens</h1>
            <div>
            <ul>
            {clientsON.map((client) => (
             <Client
             key={client.id}
             client={client}
           />
            ))}
          </ul>
            </div>
        </div>
    );
}

export default TabOntariensComponent;
