package com.lacouf.al420565final.controller;

import com.lacouf.al420565final.model.Client;
import com.lacouf.al420565final.util.ClientFactory;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin("http://localhost:3000")
public class ClientController {

    List<Client> allClients = ClientFactory.getClients();

    @GetMapping("/get/All/clients/in/ontario")
    public List<Client> getAllClientsInOntario() {
        return allClients.stream()
                .filter(x -> x.getProvince().equals("ON"))
                .collect(Collectors.toList());
    }

    @GetMapping("/get/All/clients/homme")
    public List<Client> getAllClientsHomme() {
        return allClients.stream()
                .filter(x -> x.getGender().equals("M"))
                .collect(Collectors.toList());
    }

    @GetMapping("/get/All/clients")
    public List<Client> getAllClients() {
        return new ArrayList<>(allClients);
    }

}
