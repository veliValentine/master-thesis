const runFullCycle = async () => {
  // create new timer that capatures collected data for a cycle
  const timer = new Timer();

  // Save data point at the start
  timer.start();

  const moduleAResponse = await runModuleA(timer);

  runModuleB();

  if (runModulsCAndD(moduleAResponse)) {
    const moduleCResponse = runModuleC(moduleAResponse);

    runModuleD(moduleCResponse);
  }

  // Save data point at the end
  timer.end()

  // Persist data points for later use
  timer.persist()
}