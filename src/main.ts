import { OpenAPIRouter } from '@cloudflare/itty-router-openapi';

import { UserList } from './endpoints/userList';
import { UserFetch } from './endpoints/userFetch';

export const router = OpenAPIRouter({
    docs_url: '/',
});

router.get("/api/users/", UserList);
router.get("/api/users/:userName/", UserFetch);

router.all("*", () => Response.json({
        success: false,
        error: "Route not found",
    }, {
        status: 404,
    })
);

export default {
    fetch: router.handle,
};
