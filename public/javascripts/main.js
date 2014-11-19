$(function(){
	$.ajax({
		type: "GET",
		url:"http://localhost:3000/api/prarail",
		dataType: 'json'
	}).always(function(data){
		$("#place").html(data.place);
		$("#speed").html(data.speed+"km/h");
		if(data.place == 1){
			$("#place").html("調布駅");
		}else if(data.place == 2){
			$("#place").html("明大前駅");
		}else if(data.place == 3){
			$("#place").html("新宿駅");
		}
	});
});