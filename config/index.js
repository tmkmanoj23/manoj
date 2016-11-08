'use strict'
const currentenv='development',
envfilepath=__dirname+"/environment/"+currentenv+".js";
var environmentOptions,projectName;
environmentOptions=require(envfilepath)
projectName="manoj"
module.exports={
	port:environmentOptions.server.port,
	serverHost: environmentOptions.server.host + ':' +environmentOptions.server.port,
  databaseUrl: environmentOptions.database.path + environmentOptions.database.name,
  databaseHost: environmentOptions.database.host,
  databasePort: environmentOptions.database.port,
  databaseName: environmentOptions.database.name,
  appDir: __dirname.match(new RegExp("(.*\/("+ projectName +")\/)(.*)$"))[1]
}
