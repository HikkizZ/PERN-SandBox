"use strict";
import { EntitySchema } from "typeorm";

const UserSchema = new EntitySchema({
    name: "User",
    tableName: "users",
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
        email: { //? This is the email of the user.
            type: 'varchar',
            length: 255,
            nullable: false,
            unique: true,
        },
        createAt: { //? This is the date when the user was created.
            type: 'time with time zone',
            default: () => 'CURRENT_TIMESTAMP',
            nullable: false,
        },
        updateAt: { //? This is the date when the user was updated.
            type: 'time with time zone',
            default: () => 'CURRENT_TIMESTAMP',
            onUpdate: 'CURRENT_TIMESTAMP',
            nullable: false,
        },
    },
});

export default UserSchema;