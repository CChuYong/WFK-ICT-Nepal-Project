package com.nepalproject.backend.dto;

import com.nepalproject.backend.domain.BoardEntity;

import java.time.LocalDateTime;

public record BoardResponse(
        Long id,
        String title,
        String content,
        String authorName,
        Long authorId,
        LocalDateTime createdAt,
        LocalDateTime updatedAt
) {
    public static BoardResponse fromEntity(BoardEntity entity) {
        return new BoardResponse(
                entity.getId(),
                entity.getTitle(),
                entity.getContent(),
                entity.getAuthor().getUsername(),
                entity.getAuthor().getId(),
                entity.getCreatedAt(),
                entity.getUpdatedAt()
        );
    }
}
