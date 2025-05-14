document.addEventListener('DOMContentLoaded', function() {
  // Verificamos que eCharts esté cargado
  if (typeof echarts === 'undefined') {
    console.error('eCharts no está cargado correctamente');
    return;
  }
  
  try {
    const chartDom = document.getElementById('grafico');
    if (!chartDom) {
      console.error('No se encontró el elemento con ID "grafico"');
      return;
    }
    
    const myChart = echarts.init(chartDom);
    
    const option = {
      title: {
        text: 'Distribución de Calificaciones',
        subtext: 'Segundo Cohorte - 2023',
        left: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        left: 10,
        data: ['0-1', '1-2', '2-3', '3-4', '4-5']
      },
      series: [{
        name: 'Calificaciones',
        type: 'pie',
        radius: ['40%', '70%'],
        data: [
          { value: 0, name: '0-1' },
          { value: 0, name: '1-2' },
          { value: 3, name: '2-3' },
          { value: 16, name: '3-4' },
          { value: 5, name: '4-5' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }]
    };

    myChart.setOption(option);
    
    window.addEventListener('resize', function() {
      myChart.resize();
    });
    
    console.log('Gráfico inicializado correctamente');
  } catch (error) {
    console.error('Error al inicializar el gráfico:', error);
  }
});
