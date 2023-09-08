import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '../server';
import './polyfill';

const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000',
    }),
  ],
});

async function main() {
  const guide = await trpc.ecCenter.query();
  const guide2 = await trpc.ecCenter.query();

  console.log('guide:', guide);
}

main().catch(console.error);
