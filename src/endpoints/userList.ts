import {
    OpenAPIRoute,
    OpenAPIRouteSchema,
    Query,
} from "@cloudflare/itty-router-openapi";
import { User } from "../types";

export class UserList extends OpenAPIRoute {
    static schema: OpenAPIRouteSchema = {
        tags: ["Users"],
        summary: "List Users",
        parameters: {
            token: Query(String, {
                description: "admin token",
                default: "",
            }),
        },
        responses: {
            "200": {
                description: "Returns a list of users",
                schema: {
                    success: Boolean,
                    result: {
                        users: [User],
                    },
                },
            },
        },
    };

    async handle(
        request: Request,
        env: any,
        context: any,
        data: Record<string, any>
    ) {
        // Retrieve the validated parameters
        const { token } = data.query;

        // Implement your own object list here

        return {
            success: true,
            users: [
                {
                    name: "JohnDoe",
                    key: "afhesg3wg",
                    created_at: "2024-01-05T12:00:00Z",
                    updated_at: "2024-01-05T12:00:00Z",
                },
                {
                    name: "foobar",
                    key: "awjeflihwt34l",
                    created_at: "2024-01-05T12:00:00Z",
                    updated_at: "2024-01-05T12:00:00Z",
                },
            ],
        };
    }
};
