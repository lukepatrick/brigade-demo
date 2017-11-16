const { events, Job, Group } = require("brigadier")

events.on("exec", (brigadeEvent, project) => {


    var hello = new Job("hello", "alpine:3.4", ["echo hello", "uname -a", "ls -lgra", "pwd"])
    var goodbye = new Job("goodbye", "alpine:3.4", ["echo goodbye"])
    var helloAgain = new Job("hello-again", "quay.io/charter-os/kolla-build:v0.1.3", ["which kolla-build", "hostname", "uname -a"])
    
    Group.runAll([hello, goodbye]).then( (result)=> {
    	console.log("\n result = " + result[0].toString() + "\n")
    	console.log("\n result = " + result[1].toString() + "\n")
    	helloAgain.run().then( (resultB) => {
    		console.log("\n resultB = " + resultB.toString() + "\n")
    	})
	//console.log("Hello world!")
})
})