package com.bootcamp.repository;

import com.bootcamp.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductoRepository extends JpaRepository <Producto, Long>{
    Long id(Long id);
    // JPARepository nos da el CRUD completo automaticamente
}
