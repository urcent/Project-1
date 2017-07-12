var url = 'https://www.googleapis.com/youtube/v3/search';

url += '?' + $.param({
    'part': 'snippet',
    'key': 'AIzaSyAHxeKd3vAxGz0fi177I8WfdyEfXb75LHQ',
    'q':'dog'
});

$.ajax({
    type: "GET",
    url: url
}).done(function(result) {
    //console.log(result.data[0].id);

    console.log(result);
})



      