"use strict";
import { EntitySchema } from "typeorm";

const UserSchema = new EntitySchema({
    name: "User",
    tableName: "usersauth",
    columns: {
        id: { //? This is the primary key of the table.
            type: 'int',
            primary: true,
            generated: true,
        },
        name: { //? This is the name of the user.
            type: 'varchar',
            length: 255,
            nullable: false,
        },
        rut: { //? This is the rut of the user.
            type: 'varchar',
            length: 12,
            nullable: false,
            unique: true,
        },
        password: { //? This is the password of the user.
            type: 'varchar',
            length: 255,
            nullable: false,
        },
        role: { //? This is the role of the user.
            type: 'varchar',
            length: 50,
            nullable: false,
        },
        email: { //? This is the email of the user.
            type: 'varchar',
            length: 255,
            nullable: false,
            unique: true,
        },
        createAt: { //? This is the date when the user was created.
            type: 'timestamp with time zone',
            default: () => 'CURRENT_TIMESTAMP',
            nullable: false,
        },
        updateAt: { //? This is the date when the user was updated.
            type: 'timestamp with time zone',
            default: () => 'CURRENT_TIMESTAMP',
            onUpdate: 'CURRENT_TIMESTAMP',
            nullable: false,
        },
    },
    indices: [ //? Los índices son una estructura de datos que mejora la velocidad de las operaciones de búsqueda en una tabla de base de datos.
        {
            name: "IDX_USER", 
            columns: ["id"], // Utilizamos el índice IDX_USER para buscar por el id del usuario.
            unique: true,
        },
        {
            name: "IDX_USER_RUT",
            columns: ["rut"], // Utilizamos el índice IDX_USER_RUT para buscar por el rut del usuario.
            unique: true,
        },
        {
            name: "IDX_USER_EMAIL",
            columns: ["email"], // Utilizamos el índice IDX_USER_EMAIL para buscar por el email del usuario.
            unique: true,
        },
    ],
});

export default UserSchema;