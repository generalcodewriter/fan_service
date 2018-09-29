const fs = require('fs');
const dns = require('dns');
const { spawn } = require('child_process');

var report = {};

let USA_LIST = {US, USA, AMERICA, AZ, CA, FL, TX, AR, 

var scan = {};
scan.list = {};
scan.domains = {};
scan.ipOwnership = {};
scan.locations = {};

scan.convert = (documentAtPath, toTargetList, byNewlineCharacter, andFieldSeparator) => {
	// read in document.
	fs.readFile(inDocumentAtPath, (err, data) => {
		if(err) {
			console.log(err);
		}
	});
}

scan.readTargetList = () => {
}

scan.generateReport = () => {
	// TODO generate a markdown based report.	
}

scan.asyncWhois = (thisTarget) => {
	
}

scan.traceroute = (thisTarget) => {

}

scan.nmap = (thisTarget) => {

}

scan.makeNewDirectory = (atPath, withNameforDomain) => {
	
}

scan.addFile = (withName, toDirectory) => {
	
}

scan.syncIsIpAddress = (stingToTest) => {

}

scan.syncIsDomain = (stringToTest) => {
}
