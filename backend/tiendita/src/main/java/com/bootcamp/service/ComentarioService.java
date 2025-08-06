package com.bootcamp.service;

import com.bootcamp.model.Comentario;
import java.util.List;
import java.util.Optional;

public interface ComentarioService {

    List<Comentario> listar();
    Optional<Comentario> obtenerPorId(Long id);
    Comentario guardar(Comentario comentario);
    Comentario actualizar(Long id, Comentario comentario);
    void eliminar(Long id);
}
