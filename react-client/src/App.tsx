
async function App() {
  const guide = await trpc.ecCenter.query();
  const guide2 = await trpc.ecCenter.query();

  console.log('guide:', guide);
  return (
    <div>Demo</div>
  )
}

export default App
