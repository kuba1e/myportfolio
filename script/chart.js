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
            data: [5, 5, 3, 4, 3, 3, 4, 3],
            backgroundColor: ['rgb(161,212,97)', 'rgb(161,212,1)', 'rgb(161, 4, 97)'],
            borderWidth: 4,
            borderColor: 'rgb(45,212,97)',
            hoverBorderWidth: '10',
            hoverBorderColor: 'rgb(161,212,1)'
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
