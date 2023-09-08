import { trpc } from './trpc';
import React from 'react';

async function App() {
  const guide = await trpc.ecCenter.query();
  const guide2 = await trpc.ecCenter.query();

  console.log('guide:', guide);
  return <div>{guide}</div>;
}

export default App;
