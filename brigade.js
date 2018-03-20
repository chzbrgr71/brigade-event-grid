const { events } = require('brigadier')

events.on("Microsoft.Resources.ResourceWriteSuccess", (e, p) => {
  console.log("Resrouce Group write operation")
  var eventPayload = JSON.parse(e.payload)
  
  // write values
  console.log("eventType: " + eventPayload.eventType)
  console.log("topic: " + eventPayload.topic)
  console.log("subject: " + eventPayload.subject)
  console.log("operationName: " + eventPayload.data.operationName)
  console.log("resourceProvider: " + eventPayload.data.resourceProvider)
  console.log("status: " + eventPayload.data.status)
  console.log("subscriptionId: " + eventPayload.data.subscriptionId)
  console.log("tenantId: " + eventPayload.data.tenantId)
  console.log("resourceURI: " + eventPayload.data.resourceURI)
  //console.log(e)
})

events.on("Microsoft.Resources.ResourceDeleteSuccess", (e, p) => {
  console.log("RG delete operation")
  console.log(e)
})
