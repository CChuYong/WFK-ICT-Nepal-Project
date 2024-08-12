package com.nepalproject.backend.dto;

public record LoginRequest(
        String username,
        String password
) {
}
