package com.nepalproject.backend.dto;

import com.nepalproject.backend.domain.UserEntity;

import java.util.List;

public record UserResponse(
        Long id,
        String username,
        List<String> roles
) {
    public static UserResponse fromEntity(UserEntity userEntity) {
        return new UserResponse(
                userEntity.getId(),
                userEntity.getUsername(),
                userEntity.getRoles()
        );
    }
}
