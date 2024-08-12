package com.nepalproject.backend.controller;

import com.nepalproject.backend.domain.UserEntity;
import com.nepalproject.backend.dto.DefaultResponse;
import com.nepalproject.backend.dto.LoginRequest;
import com.nepalproject.backend.dto.RegisterRequest;
import com.nepalproject.backend.dto.UserResponse;
import com.nepalproject.backend.repository.UserRepository;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/auth")
public class AuthController {
    private final AuthenticationManager authenticationManager;
    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;

    @PostMapping("/login")
    public ResponseEntity<DefaultResponse> login(
            HttpServletRequest request,
            @RequestBody LoginRequest loginRequest
    ) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.username(), loginRequest.password()));
        boolean isAuthenticated = isAuthenticated(authentication);
        if (isAuthenticated) {
            SecurityContext securityContext = SecurityContextHolder.getContext();
            securityContext.setAuthentication(authentication);
            HttpSession session = request.getSession(true);
            session.setAttribute("SPRING_SECURITY_CONTEXT", securityContext);
            return ResponseEntity.ok(new DefaultResponse("Login successful"));
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new DefaultResponse("Login failed"));
        }

    }

    @PostMapping("/logout")
    public ResponseEntity<DefaultResponse> logout(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        if (session != null) {
            session.invalidate();
        }
        return ResponseEntity.ok(new DefaultResponse("Logout successful"));
    }

    @Transactional
    @PostMapping("/register")
    public ResponseEntity<UserResponse> register(@RequestBody RegisterRequest registerRequest) {
        UserEntity previousEntity = userRepository.findByUsername(registerRequest.username());
        if (previousEntity != null) {
            return ResponseEntity.badRequest().build();
        }

        UserEntity userEntity = new UserEntity(-1L,
                registerRequest.username(),
                passwordEncoder.encode(registerRequest.password()),
                List.of("USER")
        );
        UserEntity savedUserEntity = userRepository.save(userEntity);
        return ResponseEntity.ok(UserResponse.fromEntity(savedUserEntity));
    }

    private boolean isAuthenticated(Authentication authentication) {
        return authentication != null
                && !(authentication instanceof AnonymousAuthenticationToken) && authentication.isAuthenticated();
    }
}
