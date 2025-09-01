(function () {
    const jsonData = window.dashboardData;
    function msToTime(ms) {
        return Math.floor(ms / 1000);
    }

    function secondsToHHMM(sec) {
        let m = Math.floor(sec / 60);
        let s = sec % 60;
        return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }

    new ApexCharts(document.querySelector("#triage-interval-chart"), {
        chart: { type: "line", toolbar: { show: false } },
        colors: ["#CEE9D8", "#72C090", "rgba(153, 153, 153, 0.7)", "rgba(153, 153, 153, 0.7)"],
        series: [
            { name: "Triage Done", type: "column", data: jsonData.graphs.AccidentEmergency.triage["comparison-1"].y[0].data },
            { name: "Triage Done (Avg Time)", type: "line", data: jsonData.graphs.AccidentEmergency.triage["comparison-1"].y[1].data.map(msToTime) },
            { name: "Triage Not Done", type: "column", data: jsonData.graphs.AccidentEmergency.triage["comparison-1"].y[2].data },
            { name: "Triage Not Done (Avg Time)", type: "line", data: jsonData.graphs.AccidentEmergency.triage["comparison-1"].y[3].data.map(msToTime) },
        ],
        xaxis: {
            categories: jsonData.graphs.AccidentEmergency.triage["comparison-1"].x,
            labels: {
                style: {
                    fontSize: '6px',
                    colors: '#333'
                }
            }
        },
        yaxis: {
            labels: {
                style: {
                    fontSize: '8px',
                    colors: '#333'
                }
            }
        },
        annotations: {
            yaxis: [
                {
                    y: msToTime(jsonData.graphs.AccidentEmergency.KPI),
                    borderColor: 'green',
                    label: {
                        borderColor: '#72C090',
                        style: { color: '#fff', background: '#72C090' },
                        text: "KPI : " + secondsToHHMM(msToTime(jsonData.graphs.AccidentEmergency.KPI))
                    }
                }
            ]
        },
        stroke: { width: [0, 4, 0, 4] },
        legend: { position: "bottom", fontSize: "8px" }
    }).render();

    new ApexCharts(document.querySelector("#triage-zone-chart"), {
        chart: { type: "line", toolbar: { show: false } },
        colors: ["#8fe5afff", "#18a34dff"],
        series: [
            { name: "Total Patients", type: "column", data: jsonData.graphs.AccidentEmergency.Zone["barpie-1"].bar.y[0].data },
            { name: "Avg Time", type: "line", data: jsonData.graphs.AccidentEmergency.Zone["barpie-1"].bar.y[1].data.map(msToTime) },
        ],
        xaxis: {
            categories: jsonData.graphs.AccidentEmergency.Zone["barpie-1"].bar.x,
            labels: { style: { fontSize: '10px', colors: '#333' } }
        },
        stroke: { width: [0, 3, 2], dashArray: [0, 0, 5] },
        dataLabels: {
            enabled: true,
            formatter: function (val, { seriesIndex }) {
                if (seriesIndex === 1) return secondsToHHMM(val);
                return "";
            },
            style: { fontSize: '10px' }
        },
        annotations: {
            yaxis: [
                {
                    y: msToTime(jsonData.graphs.AccidentEmergency.KPI),
                    borderColor: 'green',
                    label: {
                        borderColor: '#72C090',
                        style: { color: '#fff', background: '#72C090' },
                        text: "KPI : " + secondsToHHMM(msToTime(jsonData.graphs.AccidentEmergency.KPI))
                    }
                }
            ]
        },
        legend: { position: "bottom", fontSize: "10px", markers: { shape: "circle" } }
    }).render();


    new ApexCharts(document.querySelector("#patients-interval-chart"), {
        chart: { type: "line", toolbar: { show: false } },
        colors: ["#a1a1e4ff", "#6868e3ff"],
        series: [
            { name: "Total Visits", type: "column", data: jsonData.graphs.AccidentEmergency.interval["barline-1"].y[0].data },
            { name: "Avg Time", type: "line", data: jsonData.graphs.AccidentEmergency.interval["barline-1"].y[1].data.map(msToTime) }
        ],
        xaxis: {
            categories: jsonData.graphs.AccidentEmergency.interval["barline-1"].x,
            labels: { style: { fontSize: '8px', colors: '#333' } }
        },
        stroke: { width: [0, 3] },
        legend: { position: "bottom", fontSize: "9px" },
        dataLabels: {
            enabled: true,
            formatter: function (val, { seriesIndex }) {
                if (seriesIndex === 1) return secondsToHHMM(val);
                return "";
            },
            style: { fontSize: '10px' }
        },
        annotations: {
            yaxis: [
                {
                    y: msToTime(jsonData.graphs.AccidentEmergency.KPI),
                    borderColor: 'green',
                    label: {
                        borderColor: '#72C090',
                        style: { color: '#fff', background: '#72C090' },
                        text: "KPI : " + secondsToHHMM(msToTime(jsonData.graphs.AccidentEmergency.KPI))
                    }
                }
            ]
        },
    }).render();

    new ApexCharts(document.querySelector("#patients-doctor-chart"), {
        chart: { type: "line", toolbar: { show: false } },
        colors: ["#f4aad4ff", "#ca2474ff"],
        series: [
            { name: "Total Visits", type: "column", data: jsonData.graphs.AccidentEmergency.Doctor["barline-1"].y[0].data },
            { name: "Avg Time", type: "line", data: jsonData.graphs.AccidentEmergency.Doctor["barline-1"].y[1].data.map(msToTime) }
        ],
        xaxis: {
            categories: jsonData.graphs.AccidentEmergency.Doctor["barline-1"].x,
            labels: { style: { fontSize: '8px', colors: '#333', } }
        },
        stroke: { width: [0, 3] },
        legend: { position: "bottom", fontSize: "9px" },

        dataLabels: {
            enabled: true,
            formatter: function (val, { seriesIndex }) {
                if (seriesIndex === 1) return secondsToHHMM(val);
                return "";
            },
            style: { fontSize: '10px' }
        },
        annotations: {
            yaxis: [
                {
                    y: msToTime(jsonData.graphs.AccidentEmergency.KPI),
                    borderColor: 'green',
                    label: {
                        borderColor: '#72C090',
                        style: { color: '#fff', background: '#72C090' },
                        text: "KPI : " + secondsToHHMM(msToTime(jsonData.graphs.AccidentEmergency.KPI))
                    }
                }
            ]
        },
    }).render();

})();
