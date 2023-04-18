const performAsyncOperation = async (timer) => {
  timer.saveEvent({ // Save data point before I/O operation
    eventId: 'id ',
    before: true
  })

  await asyncCode() // code that performs async I/O operation
  
  timer.saveEvent({ // Save data point after I/O operation
    eventId: 'id ',
    before: false
  })
}

const runModuleA = async (timer) => {
  // ...blocking code related to module A
  
  await performAsyncOperation(timer)

  // ...blocking code related to module A

  return response
}

export default runModuleA;
