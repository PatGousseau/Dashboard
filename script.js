

function createPieChart() {
	var data = [{
	  values: [19, 26, 55],
	  labels: ['Residential', 'Non-Residential', 'Utility'],
	  type: 'pie'
	}];

	var layout = {
	  height: 400,
	  width: 500
	};

	Plotly.newPlot('myDiv', data, layout);
}

function createDonut() {
					var data = [{
				  values: [26,54,30],
				  labels: ['Fiber','Fragments','Miscellaneous' ],
				  domain: {column: 0},
				  name: 'GHG Emissions',
				  hoverinfo: 'label+percent+name',
				  hole: .5,
				  type: 'pie'
				}];

				var layout = {
				  title: '',
				  annotations: [
				    {
				      font: {
				        size: 20
				      },
				      showarrow: false,
				      text: '',
				      x: 0.17,
				      y: 0.5
				    }],
				  height: 550,
				  width: 550,
				    margin: {
					    l: 0,
					    r: 50,
					    b: 100,
					    t: 200,
					    pad: 4
					  },
				  showlegend: true,
				  legend: {"orientation": "h"},
				    paper_bgcolor: 'rgba(0,0,0,0)',
  					plot_bgcolor: 'rgba(0,0,0,0)',
				  grid: {rows: 1, columns: 2}
				};

				Plotly.newPlot('pieChart', data, layout);
}