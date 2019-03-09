/*
	@prototype: removeLinesFromText(text, pattern);
	@definition: Remove lines from a text that matches to the specified pattern
	@author: GRSa
	@parameters: 
		*text (String): input text
		*pattern (Regex): pattern to search for
	@return: (String) It returns the text without the lines that has the specified pattern
*/
function removeLinesFromText(text, pattern){
	var lines = text.split(/[\n\r]/)
	var result = []
	for (var i = 0; i < lines.length; i++) {
		if(!pattern.test(lines[i])) result.push(lines[i])
	}
	return result.join("\n")
}
