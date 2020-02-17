function vuldbApi() {
	var api_key = "[your_personal_api_key]";
	var request = "recent=3";
	
	var xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("result").innerHTML = this.responseText;
		}
	};
	
	xhttp.open("POST", "https://vuldb.com/?api", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send("apikey="+api_key+"&"+request);  
}
