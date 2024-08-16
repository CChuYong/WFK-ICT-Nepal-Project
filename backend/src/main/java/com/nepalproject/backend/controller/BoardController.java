package com.nepalproject.backend.controller;

import com.nepalproject.backend.domain.BoardEntity;
import com.nepalproject.backend.domain.BoardType;
import com.nepalproject.backend.dto.BoardResponse;
import com.nepalproject.backend.repository.BoardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/boards")
public class BoardController {
    private final BoardRepository boardRepository;

    @GetMapping
    public List<BoardResponse> getBoards(
            @RequestParam(required = false) String type
    ) {
        List<BoardEntity> entities = type != null ?
                boardRepository.findAllByType(BoardType.valueOf(type)) :
                boardRepository.findAll();
        return entities.stream()
                .map(BoardResponse::fromEntity)
                .toList();
    }

    @GetMapping("/{id}")
    public BoardResponse getBoard(@PathVariable Long id) {
        BoardEntity entity = boardRepository.getReferenceById(id);
        return BoardResponse.fromEntity(entity);
    }
}
