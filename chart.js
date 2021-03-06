// CHART PEROLEHAN SUARA KETUA HMIF
var ctx = document.getElementById('chart1').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'transparent',
            borderColor: 'black',
            data: [4, 7, 11, 15, 20, 21, 24]
        },{
            label: 'My Second dataset',
            backgroundColor: 'transparent',
            borderColor: '#6397BD',
            data: [3, 6, 9, 12, 15, 19, 21]
        }]
    }
});



// CHART PEROLEHAN SUARA KETUA DMIF
var ctx = document.getElementById('chart2').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'transparent',
            borderColor: 'black',
            data: [4, 7, 11, 15, 20, 21, 24]
        },{
            label: 'My Second dataset',
            backgroundColor: 'transparent',
            borderColor: '#6397BD',
            data: [3, 6, 9, 12, 15, 19, 21]
        }]
    },
    // Configuration options go here
    options: {
        tooltips: {
            mode: 'nearest'
        }
    }
});