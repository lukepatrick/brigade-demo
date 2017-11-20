const { events, Job } = require("brigadier")

events.on("exec", () => {
  var test = new Job("test-app", "node:8")

  test.tasks = [
    "ls /src",
    "pwd",
    "cd /src/hello",
    "yarn install",
    "node index.js"
  ]

  test.run()
})
