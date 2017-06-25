"use strict";

//Tworzymy funkcjie
function pobierzDane() {

	var httpReq = new XMLHttpRequest(); // tworzymy obiekt (kupujemy telefon)

	httpReq.open("GET",
		"http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl", true); // otwieramy połączenie z serwerem (nawiązujemy połączenie) definiujemy gdzie wysyłamy

	//Tworzymy funkcjia w której, definiuje co będzie się wydarzyć gdy serwer odpowie
	httpReq.onreadystatechange = function () {

		//Gdy jest równy 4, jak dane są gotowe to ich status zmienia się na 4
		if (httpReq.readyState == 4) {
			console.log(httpReq.status);

			if (httpReq.status >= 200 && httpReq.status < 300 || httpReq.status == 304 || navigator.userAgent.indexOf("Safari") >= 0 && httpReq.status == "undefined") {

				console.log(httpReq.responseText);
				var returnData = JSON.parse(httpReq.responseText);

				console.log(returnData);

				var userName = document.createElement("p");
				userName.innerHTML = "Nazwa użytkownika to: " + returnData.userName;
				document.body.appendChild(userName);

				console.log(userName);
				
				var userId = document.createElement("p");
				userId.innerHTML = "Id użytkownika to: " + returnData.userId;
				document.body.appendChild(userId);

				console.log(userId);
				
				
				var userURL = document.createElement("p");
				userURL.innerHTML = "Url użytkownika to:  <a href=https://" + returnData.userURL + ">" + returnData.userURL + "</a>";
				document.body.appendChild(userURL);

				console.log(userURL);

				httpReq = null; //nulem przerywamy połączenie
			}
		}
	}

	//Wysyłamy, połącz z serwerem/iniciowanie połaczenia
	httpReq.send();

}

//pobierzDane();