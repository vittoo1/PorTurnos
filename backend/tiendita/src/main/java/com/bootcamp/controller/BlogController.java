package com.bootcamp.controller;

import com.bootcamp.model.Blog;
import com.bootcamp.service.BlogService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/blogs")  // Doble ruta evitar
@RequiredArgsConstructor  // Constructor de Lombok
public class BlogController {

    private final BlogService blogService;


    @GetMapping
    public List<Blog> listar() { return blogService.listar(); }

    @GetMapping("/{id}")
    public ResponseEntity<Blog> obtenerPorId(@PathVariable Long id){
        return blogService.obtenerPorId((id))
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Blog> guardar(@Valid @RequestBody Blog blog){
        return ResponseEntity.ok(blogService.guardar(blog));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Blog> actualizar(@PathVariable Long id, @Valid @RequestBody Blog blog){
        return ResponseEntity.ok(blogService.actualizar(id, blog));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> eliminar(@PathVariable Long id){
        blogService.eliminar(id);
        return ResponseEntity.ok().build();
    }
}
