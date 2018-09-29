var fs = require('fs')

var report_builder = {}

var markdown = {}

markdown.syntax.title_mark = ' # '
markdown.syntax.text.italic = (thisText) {
	return ('*' + thisText + '*')
}
markdown.syntax.text.bold = (thisText){
	return ('**' + thisText + '**')
}

markdown.report = {
	title : {},
	body : {},
	footer : {}
}

module.exports = report_builder
