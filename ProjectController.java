package com.portfolio.backend.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/projects")
@CrossOrigin(origins = "http://localhost:5173")
public class ProjectController {

    @GetMapping
    public List<Map<String, String>> getProjects() {
        return List.of(
            Map.of("id", "001", "title", "Java Malware Analyzer", "desc", "Automated sandbox for identifying malicious payloads."),
            Map.of("id", "002", "title", "Network Firewall", "desc", "Custom packet filtering written in C++."),
            Map.of("id", "003", "title", "React Crypto Dashboard", "desc", "Real-time encryption algorithm visualizer."),
            Map.of("id", "004", "title", "IoT Sensor Array", "desc", "Hardware integration project using microcontrollers.")
        );
    }
}