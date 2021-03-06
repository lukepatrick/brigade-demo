const { events, Job } = require("brigadier")

events.on("exec", () => {
  var hello = new Job("hello", "alpine:3.4")
  hello.tasks = [
    "echo Hello",
    "echo World"
  ]

  var goodbye = new Job("goodbye", "alpine:3.4")
  goodbye.tasks = [
    "echo Goodbye",
    "echo World"
  ]

  hello.run()
  console.log(hello)
  goodbye.run()
  console.log(goodbye)
})
