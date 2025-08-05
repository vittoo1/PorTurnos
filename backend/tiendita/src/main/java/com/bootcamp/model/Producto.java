package com.bootcamp.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "productos")
@Getter @Setter
public class Producto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Relación con el cliente que publicó el producto
    @ManyToOne(optional = false)
    @JoinColumn(name = "cliente_id")
    private Cliente cliente;

    @NotBlank(message = "El nombre del producto es obligatorio")
    @Size(max = 120)
    @Column(name = "nombre_producto", nullable = false)
    @JsonProperty("nombre_producto")
    private String nombreProducto;

    @NotBlank(message = "La descripción es obligatoria")
    @Size(max = 300)
    private String descripcion;

    // URL de imagen
    @Column(columnDefinition = "TEXT")
    private String imagen;

    @NotNull(message = "El precio es obligatorio")
    @DecimalMin(value = "0.0", inclusive = true, message = "El precio no puede ser negativo")
    private BigDecimal precio;

    @NotNull(message = "La cantidad es obligatoria")
    private Integer cantidad;

    @Size(max = 50)
    private String categoria;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private EstadoProducto estado = EstadoProducto.USADO;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private DisponibilidadProducto disponibilidad = DisponibilidadProducto.DISPONIBLE;

    @Column(name = "fecha_publicacion", updatable = false)
    private LocalDateTime fechaPublicacion;

    @PrePersist
    protected void onCreate() {
        this.fechaPublicacion = LocalDateTime.now();
    }

    // Enums
    @JsonFormat(shape = JsonFormat.Shape.STRING)
    public enum EstadoProducto {
        NUEVO,
        SEMI_NUEVO,
        USADO;

        @JsonCreator
        public static EstadoProducto fromString(String value) {
            return EstadoProducto.valueOf(value.toUpperCase());
        }
    }

    @JsonFormat(shape = JsonFormat.Shape.STRING)
    public enum DisponibilidadProducto {
        DISPONIBLE,
        VENDIDO,
        PAUSADO;

        @JsonCreator
        public static DisponibilidadProducto fromString(String value) {
            return DisponibilidadProducto.valueOf(value.toUpperCase());
        }
    }
}
