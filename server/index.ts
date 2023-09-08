import { createHTTPServer } from '@trpc/server/adapters/standalone';
import { publicProcedure, router } from './trpc';
import cors from 'cors';
import { guideService } from './GuideService';

const appRouter = router({
  ecCenter: publicProcedure.query(() => {
    const guide = guideService.guide.userGuide();
    return guide;
  }),
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;

const server = createHTTPServer({
  router: appRouter,
  middleware: cors(),
});

server.listen(3000);
