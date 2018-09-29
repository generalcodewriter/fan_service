const fs = require('fs');
const dns = require('dns');
const { spawn } = require('child_process');

var report = {};

let USA_LIST = {"US", "USA", "AMERICA", "AZ", "CA", "FL", "TX", "AR"}
let USA_ZIP_CODE_RANGES = {};

var scan = {};
scan.list = {};
scan.domains = {};
scan.ipOwnership = {};
scan.locations = {};
scan.entities = {};

scan.convert = (documentAtPath, toTargetList, byNewlineCharacter, andFieldSeparator) => {
	// read in document.
	fs.readFile(inDocumentAtPath, (err, data) => {
		if(err) {
			console.log(err);
		}
		if(data) {
			console.log("yay!");
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

function addReport(withName, toDirectory) {

}

scan.nmap = (thisTarget, andAddReportToDirectoryCallback) => {

}

scan.nikto = (thisTarget) => {

}

scan.wpscan = (thisTarget) => {

}

scan.makeNewDirectory = (atPath, withNameforTarget) => {
	
}

scan.addFile = (withName, toTargetDirectory) => {
	
}

scan.syncIsIpAddress = (stingToTest) => {

}

scan.syncIsDomain = (stringToTest) => {
}

scan.ifThereIsARedirectionToExistingTarget = (fromThisTarget, appendToPreviousTargetRedirectsReportCallback) => {

}


