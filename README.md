# Cloudflare-DynDNS
This magical cloudflare-worker will provide you with a custom Dyn DNS provider you can easily add to common WAN routers or curl calls, to edit Cloudflare DNS Records accordingly within the boundaries of your added accounts.
Accounts are stored in a Cloudflare provided key-value store that is accessible by this code.
The Cloudflare DNS API Token has to be added as environment variable.

## ToDo's
- [ ] Add kv-store for api authentication
- [ ] Add admin route, for adding new accounts via either api call or web interface
- [ ] Implement admin route for editing Accounts
- [ ] Implement admin authentication. (reasonable to add a common oauth provider like github or custom)
- [ ] extending the todo list

## how to init
### to be done
```bash
npx wrangler login
```