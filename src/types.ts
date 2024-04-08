import {
    DateTime,
    Str,
} from "@cloudflare/itty-router-openapi";

export const User = {
    name: new Str({ example: "johndoe" }),
    key: new Str({ example: "afhesg3wg" }),
    created_at: new DateTime(),
    updated_at: new DateTime(),
};
