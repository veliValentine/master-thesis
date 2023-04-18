const runFullCycle = () => {
  const timer = new Timer();  // create new timer that capatures collected data for a cycle

  timer.start();  // Save data point at the start

  const moduleAResponse = runModuleA(timer);

  runModuleB();

  if (runModulsCAndD(moduleAResponse)) {
    const moduleCResponse = runModuleC(moduleAResponse);

    runModuleD(moduleCResponse);
  }

  timer.end() // Saves data point at the end

  timer.persist() // Persist data for later use
}