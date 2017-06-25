"use strict";

//Tworzymy funkcjie
function pobierzDane() {
	
	var httpReq = new XMLHttpRequest; // tworzymy obiekt (kupujemy telefon)
	
	httpReq.open("GET", "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl", true);// otwieramy połączenie z serwerem (nawiązujemy połączenie) definiujemy gdzie wysyłamy
	
	//Tworzymy funkcjia w której, definiuje co będzie się wydarzyć gdy serwer odpowie
	httpReq.onreadystatechange = function () {
		
		console.log(http.readyState);
		
		//Gdy jest równy 4, jak dane są gotowe to ich status zmienia się na 4
		if (httpReq.readyState == 4) {
			
			httpReq = null;
		}
	}
	
	//Wysyłamy, połącz z serwerem/iniciowanie połaczenia
	httpReq.send
	
}

pobierzDane();