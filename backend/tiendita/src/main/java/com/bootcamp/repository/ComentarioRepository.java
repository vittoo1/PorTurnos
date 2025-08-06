package com.bootcamp.repository;

import com.bootcamp.model.Comentario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ComentarioRepository extends JpaRepository <Comentario, Long> {
    Long id(Long id);

}
