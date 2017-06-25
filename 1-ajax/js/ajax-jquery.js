'use strict';


$(function () {
	console.log("jquery jestem")

	/*	$.ajax({
			url:"http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl", 
			dataType:"json",
			success: function(resultJSON){
				
				console.log(resultJSON)
			},
			error: function(msg) {
				console.log(msg);
			}
		});*/
	$("#pobierz-dane").click(function() {
		$.getJSON("http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl",
			function (data) {
				console.log(data);
			$("body").append("<p> Nazwa użytkownika to :" + data.userName + "</p>");
			$("body").append("<p> Id użytkownika to :" + data.userId + "</p>");
			$("body").append("<p> URL użytkownika to :" + data.userURL + "</p>");
			});
		

	});
});