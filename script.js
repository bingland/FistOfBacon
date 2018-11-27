
//Main 

//Timeline
google.charts.load('current', {'packages':['timeline']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = new google.visualization.DataTable({

    cols: [
      {id: 'team', label: 'Team', type: 'string'},
      {id: 'start', label: 'Season Start Date', type: 'date'},
      {id: 'end', label: 'Season End Date', type: 'date'}
    ],

    rows: [
      {c: [{v: 'Chinese Invent Bacon'},     {v: 'Date(1300, 0, 1)'}, {v: 'Date(1400, 1, 5)'}]},
      {c: [{v: 'Romans eat a type of bacon called petaso'}, {v: 'Date(1500, 8, 5)'}, {v: 'Date(1600, 1, 5)'}]},
      {c: [{v: 'First Bacon factory opend in England'}, {v: 'Date(1770, 0, 1)'}, {v: 'Date(1870, 0, 1)'}]}
    ]
  });

  var options = {
    height: 450,
    timeline: {
      groupByRowLabel: true
    }
  };

  var chart = new google.visualization.Timeline(document.getElementById('bacon_timeline'));

  chart.draw(data, options);
}
