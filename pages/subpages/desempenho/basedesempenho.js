function bannerSwitcher() {
    next = $('.sec-1-input').filter(':checked').next('.sec-1-input');
    if (next.length) next.prop('checked', true);
    else $('.sec-1-input').first().prop('checked', true);
  }
  
  var bannerTimer = setInterval(bannerSwitcher, 5000);
  
  $('nav .controls label').click(function() {
    clearInterval(bannerTimer);
    bannerTimer = setInterval(bannerSwitcher, 5000)
  });
  
  
  const ctx1 = document.getElementById('chart1').getContext('2d');
  const chart1 = new Chart(ctx1, {
      type: 'bar', 
      data: {
          labels: ['Prova 1', 'Prova 2', 'Prova 3', 'Prova 4', 'Prova 5', 'Prova 6', 'Prova 7', 'Prova 8', 'Prova 9', 'Prova 10', 'Prova 11', 'Prova 12', 'Prova 13', 'Prova 14', 'Prova 15', 'Prova 16'],
          datasets: [
              {
                  label: 'Acertos G',
                  data: [8, 10, 12, 15, 18, 20, 22, 25, 28, 30, 32, 35, 38, 40, 42, 45],
                  backgroundColor: '#B11342',
                  borderColor: '#FFFFFF',
                  borderWidth: 1
              },
              {
                  label: 'Acertos P2',
                  data: [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 7, 7, 8, 8, 9],
                  backgroundColor: '#660425',
                  borderColor: '#FFFFFF',
                  borderWidth: 1
              }
          ]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          },
          plugins: {
              legend: {
                  labels: {
                          color: 'white' 
                      
                  }
              },
              title: {
                  display: true,
                  text: 'Índice de Desempenho Específico - Acertos (Gerais e P2)',
                  color: 'white' 
              
              }
          },
          scales: {
              x: {
                  ticks: {
                      color: 'white' 
                  }
              },
              y: {
                  ticks: {
                      color: 'white' 
                  }
              }
          }
      }
  });

  const ctx2 = document.getElementById('chart2').getContext('2d');
  const chart2 = new Chart(ctx2, {
      type: 'line', 
      data: {
          labels: ['Prova 1', 'Prova 2', 'Prova 3', 'Prova 4', 'Prova 5', 'Prova 6', 'Prova 7', 'Prova 8', 'Prova 9', 'Prova 10', 'Prova 11', 'Prova 12', 'Prova 13', 'Prova 14', 'Prova 15', 'Prova 16'],
          datasets: [{
              label: 'Pontos',
              data: [15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90],
              fill: false,
              borderColor: '#FFFFFF',
              pointBackgroundColor: '#DB2A5F',
              tension: 0.1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          },
          plugins: {
              legend: {
                  labels: {
                          color: 'white'
                      
                  }
              },
              title: {
                  display: true,
                  text: 'Índice de Desempenho Específico - Redação',
                      color: 'white' 
              }
          },
          scales: {
              x: {
                  ticks: {
                      color: 'white' 
                  }
              },
              y: {
                  ticks: {
                      color: 'white' 
                  }
              }
          }
      }
  });
