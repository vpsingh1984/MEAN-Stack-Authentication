
$(window).load(function(){

	var stringData = $("#articleDescription").html();
	var result = JSON.parse(stringData);
	alert(result);

});