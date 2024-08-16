package com.nepalproject.backend.repository;

import com.nepalproject.backend.domain.BoardEntity;
import com.nepalproject.backend.domain.BoardType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BoardRepository extends JpaRepository<BoardEntity, Long> {
    List<BoardEntity> findAllByType(BoardType type);
}
