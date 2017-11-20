const { events } = require("brigadier")

// Event, Project
events.on("exec", (e, p) => {
  console.log(">>> event " + e.type + " caused by " + e.provider)
  console.log(">>> project " + p.name + " clones the repo at " + p.repo.cloneURL)
})
