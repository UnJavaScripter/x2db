var codeInput = document.getElementById("codeInput"),
	result = document.getElementById("result"),
	rightSide = document.getElementById("rightSide"),
	rightSide_cover = document.getElementById("rightSide-cover"),
	datatypes = [
		{'languageType':'string', 'databaseType': 'nvarchar(max)'},
		{'languageType':'Byte', 'databaseType': 'tinyint'},
		{'languageType':'short', 'databaseType': 'smallint'},
		{'languageType':'int', 'databaseType': 'int'},
		{'languageType':'Int64', 'databaseType': 'bigint'},
		{'languageType':'bool', 'databaseType': 'bit'},
		{'languageType':'float', 'databaseType': 'real'},
		{'languageType':'double', 'databaseType': 'float'},
		{'languageType':'DateTime', 'databaseType': 'datetime'},
		{'languageType':'TimeSpan', 'databaseType': 'time'},
		{'languageType':'Guid', 'databaseType': 'uniqueidentifier'}
	],
	findDataType = function(dataType){
		for(var i = 0; i < datatypes.length; i++) {
		   if(datatypes[i].languageType === dataType) {
		     return datatypes[i].databaseType;
		   }
		}
	};

function x2db() {
	rightSide.classList.remove('hideIt');
	rightSide_cover.classList.add('hideIt');

	var inputValue = codeInput.value,
		allTheLines = inputValue.split("\n"),
		lines = [],
		resultLines = [];

	for(aLine in allTheLines){
		lines[aLine] = allTheLines[aLine].split(" ");
		resultLines[aLine] = [];
	}

	for(var i = 0 ; i < lines.length ; i++){
		if(lines[i][0] === "public"){
			resultLines[i][0] = lines[i][2] + " " + findDataType(lines[i][1]);
			if (lines[i][1].indexOf('?') === -1){
				if( (i+1) == lines.length){
					resultLines[i][0] += " not null";
				}else{
					resultLines[i][0] += " not null,";
				}
			}
			else{
				resultLines[i][0] += ",";    
			}
		}else{
			resultLines[i][0] = "" + lines[i][0];
		}
	}
	result.innerText = resultLines.join("\n");

};
function focus_blur(elem){
	var this_pre = elem.parentNode;
	var resultContainer = this_pre.parentNode;
	resultContainer.classList.toggle('level5Shadow')
}
codeInput.addEventListener ("paste", x2db, false);