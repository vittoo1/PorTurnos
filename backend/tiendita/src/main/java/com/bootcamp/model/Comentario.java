package com.bootcamp.model;


import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Table (name = "comentarios")
@Getter
@Setter
public class Comentario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Relación con el cliente que publicó el producto
    @ManyToOne(optional = false)
    @JoinColumn(name = "cliente_id")
    private Cliente cliente;

    @ManyToOne(optional = false)
    @JoinColumn(name = "producto_id")
    private Producto producto;

    @NotBlank(message = "El nombre del comentario es obligatorio")
    @Size(max = 120)
    @Column(name = "nombre_comentario", nullable = false)
    @JsonProperty("nombre_comentario")
    private String nombreComentario;

    @NotBlank(message = "El texto es obligatorio")
    @Size(max = 300)
    private String texto;

    @Column(name = "fecha_comentario", updatable = false)
    private LocalDateTime fechaComentario;

    @PrePersist
    protected void onCreate() {
        this.fechaComentario = LocalDateTime.now();
    }

    }