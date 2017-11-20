const { events, Job, Group } = require("brigadier")

events.on("exec", () => {
  var hello = new Job("hello", "alpine:3.4", ["echo hello"])
  var goodbye = new Job("goodbye", "alpine:3.4", ["echo goodbye"])
  console.log(hello)
  Group.runEach([hello, goodbye])
  console.log(Group)
})
