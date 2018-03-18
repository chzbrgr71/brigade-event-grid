const { events } = require('brigadier')

events.on("Microsoft.Resources.ResourceWriteSuccess", (e, p) => {
  console.log(e)
})
