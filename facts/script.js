
//Main 

//Timeline
google.charts.load('current', {'packages':['timeline']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = new google.visualization.DataTable({

    cols: [
      {id: 'Event', label: 'Event', type: 'string'},
      {id: 'start', label: 'Start Date', type: 'date'},
      {id: 'end', label: 'End Date', type: 'date'}
    ],

    rows: [
      {c: [{v: '1300 BC: Chinese Invent Bacon.'},     {v: 'Date(0001, 0, 1)'}, {v: 'Date(0002, 0, 1)'}]},
      {c: [{v: 'Romans eat a type of bacon called petaso.'}, {v: 'Date(1500, 0, 1)'}, {v: 'Date(1501, 0, 1)'}]},
      {c: [{v: 'First Bacon factory opend in England.'}, {v: 'Date(1770, 0, 1)'}, {v: 'Date(1771, 0, 1)'}]},
      {c: [{v: 'World War II: Bacon grease donated by households for munitions.'}, {v: 'Date(1939, 8, 3)'}, {v: 'Date(1945, 8, 2)'}]},
      {c: [{v: 'World War II: Bacon grease donated by households for munitions.'}, {v: 'Date(1992, 0, 1)'}, {v: 'Date(1993, 0, 1)'}]},
      {c: [{v: 'United Church of Bacon founded'}, {v: 'Date(2010, 0, 1)'}, {v: 'Date(2018, 0, 1)'}]}
    ]
  });

  var options = {
    height: 450,
    timeline: {
      groupByRowLabel: true,
      
    }
  };

  var chart = new google.visualization.Timeline(document.getElementById('bacon_timeline'));

  chart.draw(data, options);
}
