const Service = require('node-windows').Service

//Creates Node Service on Windows Server
const svc = new Service({
	name: "RMWebServices",
	description: "Web services do SGE",
	script: "C:\\RMWebServices\\educacao_services\\src\\app.ts", //main app location
})

svc.on('install', function() {
	svc.start()
})

svc.install()