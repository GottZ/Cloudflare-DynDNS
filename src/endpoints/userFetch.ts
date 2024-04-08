import {
    OpenAPIRoute,
    OpenAPIRouteSchema,
    Query,
} from "@cloudflare/itty-router-openapi";
import { User } from "../types";

export class UserFetch extends OpenAPIRoute {
    static schema: OpenAPIRouteSchema = {
        tags: ["Users"],
        summary: "Get a single User by name",
        parameters: {
            userName: Query(String, {
                description: "User name",
                default: "",
            }),
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
                    user: User,
                },
            },
            "404": {
                description: "User not found",
                schema: {
                    success: Boolean,
                    error: String,
                },
            }
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
        console.log(env);

        // Implement your own object list here

        return {
            success: true,
            user: {
                name: "JohnDoe",
                key: "afhesg3wg",
                created_at: "2024-01-05T12:00:00Z",
                updated_at: "2024-01-05T12:00:00Z",
            },
        };
    }
};
