const runModuleA = async (timer) => {
  // ...blocking code related to module A
  
  // Save data point before non blocking operation
  timer.saveEvent({
    eventId: 'uniqueIdForTheEvent',
    before: true
  })

  // code that performs non blocking operation
  await asyncCodeEvent()
  
  // Save data point after non blocking operation
  timer.saveEvent({
    eventId: 'uniqueIdForTheEvent',
    before: false
  })

  // ...blocking code related to module A

  return response
}

export default runModuleA;
