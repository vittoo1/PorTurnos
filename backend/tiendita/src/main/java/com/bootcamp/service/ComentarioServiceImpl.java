package com.bootcamp.service;


import com.bootcamp.model.Comentario;
import com.bootcamp.repository.ComentarioRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ComentarioServiceImpl implements ComentarioService {

    private final ComentarioRepository comentarioRepository;

    @Override
    public List<Comentario> listar() {return comentarioRepository.findAll(); }

    @Override
    public Optional<Comentario> obtenerPorId(Long id) { return comentarioRepository.findById(id); }

    @Override
    public Comentario guardar(Comentario comentario){ return comentarioRepository.save(comentario); }

    @Override
    public Comentario actualizar(Long id, Comentario comentario) {
        comentario.setId(id);
        return comentarioRepository.save(comentario);
    }

    @Override
    public void eliminar(Long id) { comentarioRepository.deleteById(id);}
}
