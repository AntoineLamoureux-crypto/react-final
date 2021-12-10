import { React, useState, useEffect } from "react";
import Client from "./Client.js"

function TabAllClientComponent() {

    const [allClients, setAllClients] = useState([]);

    useEffect(() => {
        fetch(
            "http://localhost:9090/get/All/clients",
            {
              method: "GET",
              headers: {
                "Content-type": "application/json",
              },
            }
          ) .then(response => response.json())
          .then(data => setAllClients(data));
    }, [allClients]);


    return (

        <div>
            <h1>Liste de tout les clients</h1>
            <div>
            <ul>
            {allClients.map((client) => (
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

export default TabAllClientComponent;
