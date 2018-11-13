
//Main 

//Timeline
google.charts.load("current", {packages:["timeline"]});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var container = document.getElementById('bacon_timeline');
    var chart = new google.visualization.Timeline(container);
    var dataTable = new google.visualization.DataTable();

    dataTable.addColumn({ type: 'string', id: 'Name' });
    dataTable.addColumn({ type: 'date', id: 'Start' });
    dataTable.addColumn({ type: 'date', id: 'End' });
    dataTable.addRows([
      ['Chinese Invent Bacon', new Date(1500, 0, 01), new Date(1600, 0, 01) ],
      ['First Bacon Factory Opens in England', new Date(1770, 0, 01), new Date(1800, 0, 01) ],
      ['Roman Era: Romans Ate a type of bacon which they called petaso, which was essentially pig meat boiled with figs, then browned and seasoned with pepper sauce. ', new Date(1300, 0, 01), new Date(1400, 0, 01) ],
    ]);
      

    var options = {
      timeline: { groupByRowLabel: true, showRowLabels: true }
    };

    chart.draw(dataTable, options);
  }
