import { createHTTPServer } from '@trpc/server/adapters/standalone';
import { router } from './trpc';
import { ecCenter } from './routers';
import cors from 'cors';

const appRouter = router({
  ecCenter,
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;

const server = createHTTPServer({
  router: appRouter,
  middleware: cors(),
});

server.listen(3000);
