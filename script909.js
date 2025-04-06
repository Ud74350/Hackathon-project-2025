let chart;

function handleFileUpload() {
    alert("File uploaded! (Backend processing needed)");
}

function updateChartType() {
    const chartType = document.getElementById("chartType").value;
    renderChart(chartType);
}

function renderChart(type = "bar") {
    const ctx = document.getElementById("chartCanvas").getContext("2d");
    
    if (chart) {
        chart.destroy();
    }

    chart = new Chart(ctx, {
        type: type,
        data: {
            labels: ["A", "B", "C", "D", "E"],
            datasets: [{
                label: "Sample Data",
                data: [11, 29, 20, 140, 50],
                backgroundColor: ["red", "blue", "green", "yellow", "purple"]
            }]
        }
    });
}

renderChart();
