const { events } = require('brigadier')

events.on("Microsoft.Resources.ResourceWriteSuccess", (e, p) => {
  console.log("RG write operation")
  var eventPayload = JSON.parse(e.payload)
  console.log("Event type: " + eventPayload.eventType)
})

events.on("Microsoft.Resources.ResourceDeleteSuccess", (e, p) => {
  console.log("RG delete operation")
  console.log(e)
})
