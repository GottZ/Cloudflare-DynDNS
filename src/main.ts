import { OpenAPIRouter } from '@cloudflare/itty-router-openapi';

import { UserList } from './endpoints/userList';
import { UserFetch } from './endpoints/userFetch';

export const router = OpenAPIRouter({
    docs_url: '/',
});

router.get("/api/users/", UserList);
router.get("/api/users/:userName/", UserFetch);
//router.put("/api/users/:userName/", UserCreate);
//router.delete("/api/users/:userName/", UserDelete);

//router.get("/api/dns/:userName/", DnsFetch);
//router.put("/api/dns/:userName/", DnsCreate);
//router.delete("/api/dns/:userName/", DnsDelete);

//router.get("/api/logs/:userName/", LogsFetch);
//router.get("/api/logs/", LogsList);

//router.get("/nic/update", NicUpdate);
//router.get("/update", NicUpdate);

//router.get("/robots.txt", RobotsTxt);

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
