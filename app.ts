import { Application, Router, Context } from "https://deno.land/x/oak/mod.ts";
import router from './routes/VideoRoute.ts';

const port = 8000;
const app = new Application();

router.use(async (ctx: Context, next: Function) => {
    console.log(`HTTP ${ctx.request.method} on ${ctx.request.url}`);
    await next();
});

app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener("error", (evt) => {
	console.log(evt.error);
});

console.log('YouTube Server listening on port', port);
await app.listen({port: port});
  