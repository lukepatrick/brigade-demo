const { events, Job, Group } = require("brigadier")

events.on("exec", (brigadeEvent, project) => {


    var hello = new Job("hello", "alpine:3.4", ["echo hello"])
    var goodbye = new Job("goodbye", "alpine:3.4", ["echo goodbye"])
    var helloAgain = new Job("hello-again", "alpine:3.4", ["echo hello again"])
    
    Group.runAll([hello, goodbye]).then( (result)=> {
    	console.log(result)
    	console.log("\n result = " + result.toString() + "\n")
    	helloAgain.run().then( (resultB) => {
    		console.log("\n resultB = " + resultB.toString() + "\n")
    	})
	//console.log("Hello world!")
})
})