import { React, useState, useEffect } from "react";
import Client from "./Client.js"


function TabHommesComponent() {

    const [clientsH, setClientsH] = useState([]);

    useEffect(() => {
        fetch(
            "http://localhost:9090/get/All/clients/homme",
            {
              method: "GET",
              headers: {
                "Content-type": "application/json",
              },
            }
          ) .then(response => response.json())
          .then(data => setClientsH(data));
    }, [clientsH]);


    return (

        <div>
            <h1>Liste des hommes</h1>
            <div>
            <ul>
            {clientsH.map((client) => (
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

export default TabHommesComponent;
