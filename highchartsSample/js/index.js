Highcharts.chart('resale', {
  chart: {
    type: 'bar'
  },
  title: {
    text: 'Average Off-White Resale Price'
  },
  subtitle: {
    text: 'Source: <a href="https://stockx.com/news/numbers-off-white-sales-recap/">StockX.com</a>'
  },
  colors: ['#E97800', '#E95814', '#E94E20', '#E84312', '#7F250A'],
  xAxis: {
    categories: ['Shoe'],
    title: {
      text: null
    }
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Average Resale Value ($)',
      align: 'high'
    },
    labels: {
      overflow: 'justify'
    }
  },
  tooltip: {
    valuePrefix: '$'
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: true
      }
    }
  },
  
  credits: {
    enabled: false
  },
  series: [{
    name: 'Air Max 90',
    data: [907]
  }, {
    name: 'Air Presto',
    data: [1252]
  }, {
    name: 'Blazer Mid',
    data: [720]
  },{
    name: 'Jordan 1',
    data: [2043]
  }, {
    name: 'VaporMax',
    data: [1156]
  }]
});

Highcharts.chart('salesvolume', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Sales Volume'
    },
    subtitle: {
    text: 'Source: <a href="https://stockx.com/news/numbers-off-white-sales-recap/">StockX.com</a>'
    },
    colors: ['#E97800', '#E95814', '#E94E20', '#E84312', '#7F250A'],
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }
        }
    },
    series: [{
        name: 'Market Share',
        colorByPoint: true,
        data: [{
            name: 'Air Max 90',
            y: 16.7,
        }, {
            name: 'Air Presto',
            y: 22.2
        }, {
            name: 'Blazer Mid',
            y: 17.1
        }, {
            name: 'Jordan 1',
            y: 24.1
        }, {
            name: 'VaporMax',
            y: 19.9
        }]
    }]
});

Highcharts.chart('resaleovertime', {

  title: {
    text: 'Average Resale Price Over Time'
  },

  subtitle: {
    text: 'Source: <a href="https://highsnobiety.com">HighSnobiety.com</a>'
  },

  yAxis: {
    title: {
      text: 'Price'
    }
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false
      },
      pointStart: 2010
    }
  },

  series: [{
    name: 'Installation',
    data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
  }, {
    name: 'Manufacturing',
    data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
  }, {
    name: 'Sales & Distribution',
    data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
  }, {
    name: 'Project Development',
    data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
  }, {
    name: 'Other',
    data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
  }],

  responsive: {
    rules: [{
      condition: {
        maxWidth: 500
      },
      chartOptions: {
        legend: {
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom'
        }
      }
    }]
  }

});