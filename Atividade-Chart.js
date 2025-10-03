<!DOCTYPE html>
<html lang="getElementById">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>

<body>
  <div style="max-width: 600px;">
    <canvas id="myChart2"></canvas>
    <canvas id="myChart1"></canvas>
  </div>
</body>

</html>
<script>
  const ctx = document.getElementById('myChart1');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
      datasets: [{
        label: 'Temperatura Média C°',
        data: [22, 24, 27, 23, 20, 18],
        backgroundColor: '#F26389',
        borderWidth: 1
      }, {
        label: 'Umidade Média em %',
        data: [90, 89, 93, 87, 88, 82],
        backgroundColor: '#38ABF2',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  const ctx2 = document.getElementById('myChart2');

  new Chart(ctx2, {
    type: 'line',
    data: {
      labels: ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
      datasets: [{
        label: 'Temperatura Média C°',
        data: [30, 29, 28, 25, 22, 23],
        backgroundColor: '#F26389',
        borderColor: '#F26389',
        borderWidth: 1
      }, {
        label: 'Umidade Média em %',
        data: [80, 82, 80, 85, 80, 83],
        backgroundColor: '#38ABF2',
        borderColor: '#38ABF2',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
</script>