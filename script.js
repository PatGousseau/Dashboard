

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
	  height: 356,
	  width: 1215,
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
	Plotly.newPlot('barGraph', data, layout, config);
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
				  width: 382,
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