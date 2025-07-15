const text = `Olá! Meu nome é Vitor Hugo, sou desenvolvedor web em formação e estou em constante evolução para me tornar um profissional full stack. Comecei com HTML, CSS e JavaScript, e atualmente estou expandindo meus conhecimentos em Node.js, Angular e Flutter.

Tenho como objetivo criar aplicações completas e bem estruturadas, que unam design moderno, código limpo e uma ótima experiência para o usuário. Gosto de transformar ideias em projetos funcionais, buscando sempre aprender novas tecnologias e boas práticas de desenvolvimento.

Neste portfólio, compartilho os projetos que venho desenvolvendo como forma de estudo e prática profissional. Estou aberto a novas oportunidades, freelas ou parcerias, especialmente com pessoas e empresas que valorizam dedicação, evolução e inovação.`;

const textElement = document.getElementById("typed-text");
let index = 0;

// 🎵 Som de digitação
const typingSound = new Audio("sounds/typing.mp3");
typingSound.volume = 0.4;

function typeText() {
  if (index < text.length) {
    textElement.innerHTML += text.charAt(index);

    // Toca som se o caractere não for espaço ou quebra de linha
    if (text.charAt(index) !== ' ' && text.charAt(index) !== '\n') {
      typingSound.currentTime = 0;
      typingSound.play();
    }

    index++;
    setTimeout(typeText, 30);
  } else {
    typingSound.pause();
  }
}

window.addEventListener("load", async () => {
  typeText();


  const ctx = document.getElementById('skillsChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: Object.keys(icons),
      datasets: [{
        label: 'Nível de Conhecimento (%)',
        data: [90, 85, 80, 70, 60, 50],
        backgroundColor: [
          '#f16529',
          '#2965f1',
          '#f7df1e',
          '#8cc84b',
          '#dd1b16',
          '#42a5f5'
        ],
        borderRadius: 8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        tooltip: {
          callbacks: {
            label: function (context) {
              return `${context.dataset.label}: ${context.parsed.y}%`;
            }
          }
        },
        legend: {
          labels: {
            color: '#ccc'
          }
        }
      },
      scales: {
        x: {
          ticks: {
            callback: function () {
              return '';
            },
            color: '#ccc'
          },
          grid: {
            color: '#333'
          }
        },
        y: {
          beginAtZero: true,
          max: 100,
          ticks: {
            color: '#ccc'
          },
          grid: {
            color: '#333'
          }
        }
      }
    },
    plugins: [{
      id: 'customIconLabels',
      afterDraw: chart => {
        const xAxis = chart.scales.x;
        const yAxis = chart.scales.y;

        xAxis.ticks.forEach((_, i) => {
          const x = xAxis.getPixelForTick(i);
          const y = yAxis.bottom + 30;
          const label = chart.data.labels[i];
          const img = icons[label];
          if (img) {
            chart.ctx.drawImage(img, x - iconSize / 2, y, iconSize, iconSize);
          }
        });
      }
    }]
  });
});

// Função para carregar imagens
function loadImage(src) {
  return new Promise(resolve => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve(img);
  });
}