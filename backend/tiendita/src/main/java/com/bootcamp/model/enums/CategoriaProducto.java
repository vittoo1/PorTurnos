package com.bootcamp.model.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonFormat;

@JsonFormat(shape = JsonFormat.Shape.STRING)
public enum CategoriaProducto {
    Eurogames,
    Ameritrash,
    Fillers,
    Cooperativos,
    Miniaturas,
    Roles_ocultos,
    Para_dos,
    Solitario,
    WarGames,
    Legacy,
    Abstractos,
    Party_Games,
    Juegos_de_Rol,
    Construcción_de_Mazos,
    CCG,
    LCG;



    @JsonCreator
    public static CategoriaProducto fromString(String value) {
        return CategoriaProducto.valueOf(value.toUpperCase());
    }
}
