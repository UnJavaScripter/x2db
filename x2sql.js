var codeInput = document.getElementById("codeInput");
var result = document.getElementById("result");
function x2sql() {
	var inputValue = codeInput.value;
	var allTheLines = inputValue.split("\n");

	// ...
	var resultArr = [];

	var lines = [];
	var resultLines = [];

	for(aLine in allTheLines){
		lines[aLine] = allTheLines[aLine].split(" ");
		resultLines[aLine] = [];
	}
  

  for(line in lines){
      if(lines[line][0] === "public"){
        resultLines[line][0] = lines[line][2] + " " + findDataType(lines[line][1]);
        if (lines[line][1].indexOf('?') === -1){
        	resultLines[line][0] += " not null,";
        }
        else{
        	resultLines[line][0] += ",";
    	}
      }else{
        resultLines[line][0] = "Else" + lines[line][0];
      }

  }


	//console.log(lines);
	console.log(resultLines);

	// ...

	var result = resultArr.join("\n")
	result.innerText = "result goes here";
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
		{'languagetype':'Byte', 'databaseType': 'tinyint'},
		{'languagetype':'short', 'databaseType': 'smallint'},
		{'languageType':'int', 'databaseType': 'int'},
		{'languagetype':'Int64', 'databaseType': 'bigint'},
		{'languagetype':'bool', 'databaseType': 'bit'},
		{'languagetype':'float', 'databaseType': 'real'},
		{'languagetype':'double', 'databaseType': 'float'},
		{'languagetype':'DateTime', 'databaseType': 'datetime'},
		{'languagetype':'TimeSpan', 'databaseType': 'time'},
		{'languagetype':'Guid', 'databaseType': 'uniqueidentifier'}
		];