$(function(){
	$('#esense_chart').highcharts({
	      chart: {
	        width:800,
	        heigth:100
	      },
	      title: {
	        text: 'eSense',
	        x: -20 //center
	      },
	      xAxis: {
	        categories: [],
	      	labels:{
	      		enabled:false
	      	}
	      },
	      scrollbar: {
                enabled: true  // scrollbar 無効
            },
	      tooltip: {
	        valueSuffix: '°C'
	      },
	      legend: {
	        layout: 'vertical',
	        align: 'right',
	        verticalAlign: 'middle',
	        borderWidth: 0
	      },
	      series: [{
	        name: 'attention',
	        data: []
	      },
	      {
	      	name: "meditation",
	      	data: []
	      }]
	    });
		$('#raw_chart').highcharts({
	      chart: {
	        width:800,
	        heigth:100
	      },
	      title: {
	        text: 'Raw Data',
	        x: -20 //center
	      },
	      xAxis: {
	        categories: [],
	      	labels:{
	      		enabled:false
	      	}
	      },
	      scrollbar: {
                enabled: true  // scrollbar 無効
            },
	      tooltip: {
	        valueSuffix: '°C'
	      },
	      legend: {
	        layout: 'vertical',
	        align: 'right',
	        verticalAlign: 'middle',
	        borderWidth: 0
	      },
	      series: [{
	        name: 'delta',
	        data: []
	      },{
	        name: 'theta',
	        data: []
	      },{
	        name: 'lowalpha',
	        data: []
	      },{
	        name: 'highalpha',
	        data: []
	      },{
	        name: 'lowbeta',
	        data: []
	      },{
	        name: 'highbeta',
	        data: []
	      },{
	        name: 'lowgamma',
	        data: []
	      },
	      {
	      	name: "midgamma",
	      	data: []
	      }]
	    });
	    //delta, theta, lowalpha, highalpha, lowbeta, highbeta, lowgamma, midgamma

	var esense_chart = $('#esense_chart').highcharts();
	var raw_chart = $("#raw_chart").highcharts();

	var attention = new Array();
	var meditation = new Array();

	var se_att = esense_chart.series[0];
	var se_med = esense_chart.series[1];

	se_att.setData(attention,true);
	se_med.setData(meditation,true);

	var delta = new Array();
	var theta = new Array();
	var lalpha = new Array();
	var halpha = new Array();
	var lbeta = new Array();
	var hbeta = new Array();
	var lgamma = new Array();
	var mgamma = new Array();

	var se_delta = raw_chart.series[0];
	var se_theta = raw_chart.series[1];
	var se_lalpha = raw_chart.series[2];
	var se_halpha = raw_chart.series[3];
	var se_lbeta = raw_chart.series[4];
	var se_hbeta = raw_chart.series[5];
	var se_lgamma = raw_chart.series[6];
	var se_mgamma = raw_chart.series[7];

	se_delta.setData(delta,true);
	se_theta.setData(theta,true);
	se_lalpha.setData(lalpha,true);
	se_halpha.setData(halpha,true);
	se_lbeta.setData(lbeta,true);
	se_hbeta.setData(hbeta,true);
	se_lgamma.setData(lgamma,true);
	se_mgamma.setData(mgamma,true);


	setInterval(function(){
		$.ajax({
		type: "GET",
		url:"http://localhost:3000/api/eeg",
		dataType: 'json'
	}).always(function(data){
		var MAX = 50;
		if(data.attention){
			se_att.addPoint(data.attention);
			if(attention.length > MAX){
				se_att.points[0].remove();
			}
		}
		if(data.meditation){
			se_med.addPoint(data.meditation);
			if(meditation.length > MAX){
				se_med.points[0].remove();
			}
		}
		if(data.delta){
			se_delta.addPoint(data.delta);
			if(delta.length > MAX){
				se_delta.points[0].remove();
			}
		}
		if(data.theta){
			se_theta.addPoint(data.theta);
			if(theta.length > MAX){
				se_theta.points[0].remove();
			}
		}
		if(data.lowalpha){
			se_lalpha.addPoint(data.lowalpha);
			if(lalpha.length > MAX){
				se_lalpha.points[0].remove();
			}
		}
		if(data.highalpha){
			se_halpha.addPoint(data.highalpha);
			if(halpha.length > MAX){
				se_halpha.points[0].remove();
			}
		}
		if(data.lowbeta){
			se_lbeta.addPoint(data.lowbeta);
			if(lbeta.length > MAX){
				se_lbeta.points[0].remove();
			}
		}
		if(data.highbeta){
			se_hbeta.addPoint(data.highbeta);
			if(hbeta.length > MAX){
				se_hbeta.points[0].remove();
			}
		}
		if(data.lowgamma){
			se_lgamma.addPoint(data.lowgamma);
			if(lgamma.length > MAX){
				se_lgamma.points[0].remove();
			}
		}
		if(data.midgamma){
			se_mgamma.addPoint(data.midgamma);
			if(mgamma.length > MAX){
				se_mgamma.points[0].remove();
			}
		}
	});
	},1000);
})