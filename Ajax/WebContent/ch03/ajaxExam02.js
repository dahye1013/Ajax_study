
function startMethod() {

	httpRequest = new XMLHttpRequest();
	httpRequest.onreadystatechange = resultProcess;
	httpRequest.open("GET", "ajaxExam02.xml", true);
	httpRequest.send(null);

}

function resultProcess() {
	if (httpRequest.readyState == 4) {
		if (httpRequest.status == 200) {
			let xmlDoc = httpRequest.responseXML;
			/*
			 * var subjectList = xmlDoc.getElementsByTagName("subject"); 
			 * var message=null; 
			 * 		for(i=0;i<subjectList.length;i++){ 
			 * let subject =subjectList.item(i); 
			 * let codeNumber=subject.getElementsByTagName("codeNumber").item(0).firstChild.nodeValue;
			 * let titleName=subject.getElementsByTagName("titleName").item(0).firstChild.nodeValue;
			 * let roomNumber=subject.getElementsByTagName("roomNumber").item(0).firstChild.nodeValue;
			 * message += "<tr><td>"+codeNumber+"</td><td>"+titleName+"</td><td>"+roomNumber+"</td><td>" +"</tr>"; 
			 * 		}
			 */
			
			let trTag = "";
			let tdTag = "";
			
			//테이블을 지운다
			let resultDisplay = document.getElementById("resultDisplay");
			while(resultDisplay.hasChildNodes()){
				resultDisplay.removeChild(removeNode.firstChild);
			}
			
			var subjectList = xmlDoc.getElementsByTagName("subject");

			for(i=0; i<subjectList.length; i++){//행(줄)

				trTag = document.createElement("tr");
				let childList = subjectList[i].childNodes;
				//alert("subject 개수 = "+childList.length);//7개
				for(j=0; j<childList.length; j++){
					if(childList[j].firstChild != null){
						 tdTag = document.createElement("td");
						 tdTag.appendChild(childList[j].firstChild);
						 trTag.appendChild(tdTag);
					}//if
				}//for j
				
				document.getElementById("resultDisplay").appendChild(trTag);
				
			}//for i

			//			document.getElementById("resultDisplay").innerHTML = message;
		}
	}
}