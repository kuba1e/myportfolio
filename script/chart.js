let myChart = document.getElementById('myChart').getContext('2d');

let massPopChart = new Chart(myChart, {
    type: 'pie',
    data: {
        labels: [
            'HTML/CSS',
            'Responsive layout',
            'jQuery',
            'CSS Preprocessors',
            'Bootstrap',
            'Git',
            'Figma',
            'Gulp'
        ],

        datasets: [{
            label: 'Colors',
            data: [5, 5, 2, 4, 2, 3, 4, 2],
            backgroundColor: ['rgb(232,76,40)', 'rgb(19,118,192)', 'rgb(250,165,35)', 'rgb(207,100,154)', 'rgb(85,58,125)', 'rgb(246,78,25)', 'rgb(10, 201, 127)', 'rgb(211,74,71)'],
            borderWidth: 4,
            borderColor: '#fff',
            hoverBorderWidth: '10',
            hoverBorderColor: '#fff'
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Skills',
            fontSize: '80',
            fontFamily: "Arial, Helvetica, sans-serif",
            fontColor: '#fff',
            lineHeight: '94px'
        },
        legend: {
            labels: {
                // This more specific font property overrides the global property
                fontColor: '#fff',
                defaultFontSize: '24'
            }
        },
        aspectRatio: '2.2'
    }

});
