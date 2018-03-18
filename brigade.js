const { events } = require('brigadier')

events.on("Microsoft.Resources.ResourceWriteSuccess", (e, p) => {
  console.log("RG write operation")
  console.log(e)
})

events.on("Microsoft.Resources.ResourceDeleteSuccess", (e, p) => {
  console.log("RG delete operation")
  console.log(e)
})
