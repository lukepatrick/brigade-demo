const { events, Job } = require("brigadier")

events.on("exec", () => {
  var job = new Job("do-nothing", "alpine:3.4")
  job.tasks = [
    "echo Hello",
    "echo World"
  ]
  console.log(job)
  job.run()
  console.log(job)
})
