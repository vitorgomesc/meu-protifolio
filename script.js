const ctx = document.getElementById('skillsChart').getContext('2d');

// Carregando imagens dos ícones
const icons = {
  HTML: new Image(),
  CSS: new Image(),
  JavaScript: new Image(),
  'Node.js': new Image(),
  Angular: new Image(),
  Flutter: new Image(),
};

icons.HTML.src = '/icons/html.svg'; // Caminho atualizado
icons.CSS.src = 'icons/css.svg';
icons.JavaScript.src = 'icons/javascript.svg';
icons['Node.js'].src = 'icons/nodejs.svg';
icons.Angular.src = 'icons/angular.svg';
icons.Flutter.src = 'icons/flutter.svg';

const initialData = [90, 85, 80, 50, 40, 30];

const chart = new Chart(ctx, {
  type: 'radar',
  data: {
    labels: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Angular', 'Flutter'],
    datasets: [{
      label: 'Habilidades',
      data: [...initialData],
      backgroundColor: 'rgba(0, 240, 255, 0.2)',
      borderColor: '#00f0ff',
      borderWidth: 2,
      pointBackgroundColor: '#00f0ff'
    }]
  },
  options: {
    responsive: true,
    animation: {
      duration: 1000,
      easing: 'easeInOutQuad'
    },
    scales: {
      r: {
        angleLines: {
          color: '#444'
        },
        grid: {
          color: '#444'
        },
        pointLabels: {
          font: {
            size: 0 // Oculta texto, só vai desenhar os ícones
          },
          callback: function (_, index) {
            return ''; // Remove texto
          }
        },
        ticks: {
          display: false
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    },
    elements: {
      line: {
        borderWidth: 2
      }
    },
    // Custom drawing of icons
    plugins: [{

      id: 'customLabels',
      afterDraw(chart) {
        const { ctx, chartArea, scales } = chart;
        const labels = chart.data.labels;

        labels.forEach((label, i) => {
          const angle = (Math.PI / 3) * i - Math.PI / 2;
          const r = scales.r.drawingArea + 20;
          const x = scales.r.xCenter + r * Math.cos(angle) - 12;
          const y = scales.r.yCenter + r * Math.sin(angle) - 12;

          const icon = icons[label];
          if (icon.complete) {
            ctx.drawImage(icon, x, y, 24, 24);
          }
        });
      }

    }]
  }
});

// Animação de variação contínua
setInterval(() => {
  chart.data.datasets[0].data = initialData.map(value => {
    const variation = Math.floor(Math.random() * 6) - 3;
    return Math.max(30, Math.min(95, value + variation));
  });
  chart.update();
}, 1500);
