
let httpRequest = null;

function startMethod(){

	httpRequest = new XMLHttpRequest();
	httpRequest.onreadystatechange = resultProcess;
	httpRequest.open("GET", "ajaxExam01.xml", true);
//	httpRequest.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8");
	httpRequest.send(null);
	
}

function resultProcess(){
	if(httpRequest.readyState == 4){
		if(httpRequest.status == 200){
			document.getElementById("displayArea").innerHTML = httpRequest.responseText;
			
			let displayArea = document.getElementById("displayArea");
			//visibility풀기
			//displayArea.style.visibility="visible";
			//display풀기
			displayArea.style.display="block";
		}
	}
}