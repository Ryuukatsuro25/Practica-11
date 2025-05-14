
/* eslint-disable no-undef, no-unused-vars */

// CONFIGURACIÓN DEL GRÁFICO
let options = {
  // Configuración del desplegable
  tooltip: {
    trigger: "item",
    // {a}: name, {b}: data.name, {c}: data.value, {d}: percent
    formatter: "{a} <br/>{b}: {c} ({d}%)"
  },
  // Configuración de la leyenda
  legend: {
    orient: "vertical",
    left: 10,
    data: ["0-1", "1-2", "2-3", "3-4", "4-5"]
  },
  // COnfiguración de los datos
  series: [
    {
      name: "Calificación - Segundo Cohorte",
      type: "pie",
      radius: ["50%", "70%"],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: "center"
      },
      emphasis: {
        label: {
          show: true,
          fontSize: "30",
          fontWeight: "bold"
        }
      },
      labelLine: {
        show: false
      },
      // Datos que se van a mostrar en el gráfico
      data: [
        { value: 0, name: "0-1" },
        { value: 0, name: "1-2" },
        { value: 3, name: "2-3" },
        { value: 16, name: "3-4" },
        { value: 5, name: "4-5" }
      ]
    }
  ]
};
// Crea un gráfico que se mostrará en el div pasado como parámetro
let pieChart = echarts.init(document.getElementById("grafico"));
// Configura el gráfico
pieChart.setOption(options);
