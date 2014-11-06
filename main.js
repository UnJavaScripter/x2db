var codeInput = document.getElementById("codeInput");
var result = document.getElementById("result");
function x2db() {
	var inputValue = codeInput.value;
	var allTheLines = inputValue.split("\n");

	// ...

	var lines = [];
	var resultLines = [];

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


	//console.log(lines);
	console.log(resultLines);

	// ...

	var resultStr = resultLines.join("\n")
	result.innerText = resultStr
}

function findDataType(dataType){
	for(var i = 0; i < datatypes.length; i++) {
	   if(datatypes[i].languageType === dataType) {
	     return datatypes[i].databaseType;
	   }
	}
}

var datatypes = [
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
		];
