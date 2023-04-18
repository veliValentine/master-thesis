const runModuleA = async (timer) => {
  // ...blocking code related to module A
  
  // Save data point before non blocking operation
  timer.saveEvent({
    eventId: 'id ',
    before: true
  })

  // code that performs non blocking operation
  await asyncCode()
  
  // Save data point after non blocking operation
  timer.saveEvent({
    eventId: 'id ',
    before: false
  })

  // ...blocking code related to module A

  return response
}

export default runModuleA;
