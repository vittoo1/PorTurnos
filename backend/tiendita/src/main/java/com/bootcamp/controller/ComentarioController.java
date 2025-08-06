package com.bootcamp.controller;

import com.bootcamp.model.Comentario;
import com.bootcamp.service.ComentarioService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/comentarios")
@RequiredArgsConstructor
public class ComentarioController {

    private final ComentarioService comentarioService;

    @GetMapping
    public List<Comentario> Listar() {
        return comentarioService.listar();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Comentario> obtenerPorId(@PathVariable Long id) {
        return comentarioService.obtenerPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Comentario> guardar(@Valid @RequestBody Comentario comentario) {
        return ResponseEntity.ok(comentarioService.guardar(comentario));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Comentario> actualizar(@PathVariable Long id, @Valid @RequestBody Comentario comentario) {
        return ResponseEntity.ok(comentarioService.actualizar(id, comentario));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> eliminar(@PathVariable Long id) {
        comentarioService.eliminar(id);
        return ResponseEntity.ok().build();
    }
}
