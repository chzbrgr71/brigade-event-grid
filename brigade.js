const { events } = require('brigadier')

events.on("exec", (brigadeEvent, project) => {
  console.log("Hello running brigade v0.11.0")
})
