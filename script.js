

function createBarGraph() {
		var data = [{
    x: [0,50,100,150,200,250,300,350,400,450,500,550,600,650,700,750,800,850,900,950,1000],
    y: [50,30,60,10,14,16,70,60,40,30,69,53,40,4,7,1,81,3,43,76,44],
	  domain: {column: 0},
	  name: 'Micro Plastics',
	  hoverinfo: 'label+percent+name',
	  type: 'bar',
	  marker: {color: 'rgb(149,191,179)'}
	}];

	var layout = {

	  title: '',
	  yaxis: {title: 'Particle Count'},
	  xaxis: {title: 'Size (μm)'},
	  autosize: true,
		height:400,
	  annotations: [
	    {
	      font: {
	        size: 20
	      },
	      showarrow: false,
	      text: '',
	      x: 0.2,
	      y: 0.5
	    }],

	    margin: {
		    l: 60,
		    r: 20,
		    b: 40,
		    t: 50,
		    
		  },
	  showlegend: true,
	  legend: {"orientation": "h"},
	    paper_bgcolor: 'rgba(0,0,0,0)',
			plot_bgcolor: 'rgba(0,0,0,0)',

	 
	};
	var config = {responsive: true}
	Plotly.newPlot('barGraph',data, layout, config);
}

function createDonut() {
					var data = [{
				  values: [26,54,30],
				  labels: ['Fiber','Fragments','Miscellaneous' ],
				  domain: {column: 0},
				  name: 'Micro Plastics',
				  hoverinfo: 'label+percent+name',
				  hole: .5,
				  type: 'pie',
				      marker: {
				      'colors': [
				        'rgb(50,138,217)',
				        'rgb(236,171,85)',
				        'rgb(128,204,112)',

				      ]
				    	},
				}];

				var layout = {
				  title: 'Total: 2,934',
				  autosize: true,

				  annotations: [
				    {
				      font: {
				        size: 20,

				      },
				      showarrow: false,
				      text: '',
				      x: 0.2,
				      y: 0.5
				    }],
				  height: 356,
				  
				    margin: {
					    l: 20,
					    r: 20,
					    b: 40,
					    t: 50,
					    
					  },
				  showlegend: true,
				  legend: {"orientation": "h"},
				    paper_bgcolor: 'rgba(0,0,0,0)',
  					plot_bgcolor: 'rgba(0,0,0,0)',

				 
				};
				var config = {responsive: true}
				Plotly.newPlot('pieChart', data, layout, config);
}

function createTable() {
	var values = [
      ['MP_001', 'MP_002','MP_003','MP_004','MP_005','MP_006','MP_007','MP_008','MP_009','MP_010','MP_011'],
      [150, 170,140,30,170,120,500,609,345,65,34],
      ['Blue', 'Clear', 'Red', 'Clear', 'Blue','Green','Blue','Blue','Clear','Green','Blue'],
      ['Fragment','Fiber','Fragment','Fragment','Fiber','Fragment','Fiber','Fragment','Fiber','Fiber','Fragment'],
		[150.6, 17.4,10.8,300.4,170,120,50.6,60.9,3.45,65,3.4],
		[15.3, 1.74,108.3,30.2,170,120,50.6,60.5,3.45,65,3.4]]

var data = [{
  type: 'table',
  header: {
    values: [["<b>ID</b>"], ["<b>Size Frac. (μm)</b>"],
				 ["<b>Colour</b>"], ["<b>Category</b>"], ["<b>Length (μm)</b>"], ["<b>Width (μm)</b>"]],
    align: "center",
    fill: {color: '#fbfbfb'},
    line: {color: "fbfbfb", width: 1},
    font: {family: "Open Sans", size: 16, color: "black"}
  },
  cells: {
    values: values,
    height:40,
    line: {color: "#fbfbfb", width: 1},
    align: "center",
    color : "#aeaeae",
    fill: {color: '#fbfbfb'},
    font: {family: "Open Sans", size: 16, color: ["#a19a99"]}
  }
}]

				var layout = {
				  title: '',
				  autosize: true,
				  height:356,
				  annotations: [
				    {
				      font: {
				        size: 20,

				      },
				      showarrow: false,
				      text: '',
				      x: 0.2,
				      y: 0.5
				    }],

				    margin: {
					    l: 0,
					    r: 0,
					    b: 0,
					    t: 0,
					    
					  },
				  showlegend: true,
				  legend: {"orientation": "h"},
				    paper_bgcolor: 'rgba(0,0,0,0)',
  					plot_bgcolor: 'rgba(0,0,0,0)',

				 
				};

var config = {responsive: true};
Plotly.newPlot('table', data, layout,config);




}