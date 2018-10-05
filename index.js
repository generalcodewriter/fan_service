const fs = require('fs');
const dns = require('dns');
const { spawn } = require('child_process');

var report = {};

let STATE_CODE_REGEX = /[ACDFGHIKLMNOPRSTUVW][LKSZRAOTECMUIDNYHVJPX]/
let USA_ZIP_CODE_REGEX = /^[0-9]{5}(-[0-9]{4})?$/
let IP_REGEX = /\b(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[0-9]?[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[0-9]?[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[0-9]?[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[0-9]?[0-9])\b/


var scan = {};
scan.targetList = {};
scan.domainsList = {};
scan.ipAddressesList = {};
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

scan.resolveIp = (thisTarget) => {

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

scan.investigateDomain(target) {

}
