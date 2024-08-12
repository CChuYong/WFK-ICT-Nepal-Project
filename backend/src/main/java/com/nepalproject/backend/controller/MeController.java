package com.nepalproject.backend.controller;

import com.nepalproject.backend.dto.UserResponse;
import com.nepalproject.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/me")
public class MeController {
    private final UserRepository userRepository;

    @GetMapping
    public UserResponse getMe() {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        return UserResponse.fromEntity(userRepository.findByUsername(username));
    }
}
