// Texto com efeito de digitação
const text = `Olá! Meu nome é Vitor Hugo, sou desenvolvedor web em formação e estou em constante evolução para me tornar um profissional full stack. Comecei com HTML, CSS e JavaScript, e atualmente estou expandindo meus conhecimentos em Node.js, Angular e Flutter.

Tenho como objetivo criar aplicações completas e bem estruturadas, que unam design moderno, código limpo e uma ótima experiência para o usuário. Gosto de transformar ideias em projetos funcionais, buscando sempre aprender novas tecnologias e boas práticas de desenvolvimento.

Neste portfólio, compartilho os projetos que venho desenvolvendo como forma de estudo e prática profissional. Estou aberto a novas oportunidades, freelas ou parcerias, especialmente com pessoas e empresas que valorizam dedicação, evolução e inovação.`;

const textElement = document.getElementById("typed-text");
let index = 0;

function typeText() {
  if (index < text.length) {
    textElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeText, 50); // velocidade da digitação
  }
}

window.addEventListener("load", () => {
  typeText();

  // Gráfico com Chart.js
  const ctx = document.getElementById('skillsChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Angular', 'Flutter'],
      datasets: [{
        label: 'Nível de Conhecimento (%)',
        data: [90, 85, 80, 70, 60, 50],
        backgroundColor: [
          '#f16529', // HTML
          '#2965f1', // CSS
          '#f7df1e', // JavaScript
          '#8cc84b', // Node.js
          '#dd1b16', // Angular
          '#42a5f5'  // Flutter
        ],
        borderRadius: 8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          ticks: {
            color: '#ccc'
          },
          grid: {
            color: '#333'
          }
        },
        x: {
          ticks: {
            color: '#ccc'
          },
          grid: {
            color: '#333'
          }
        }
      },
      plugins: {
        legend: {
          labels: {
            color: '#ccc'
          }
        }
      }
    }
  });
});
