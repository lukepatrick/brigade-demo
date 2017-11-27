const { events, Job } = require("brigadier")

events.on("exec", (e, p) => {
  var one = new Job("one", "docker:17.06.0-ce", ["docker images"])

  one.docker.enabled = true
  console.log(one)

  results = one.run()
  console.log(results.toString())
})