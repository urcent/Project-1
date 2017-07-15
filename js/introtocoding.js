"use strict";

$(document).ready(function () {

    function videosCall (){

        // API Call STEP #1: You Tube Data API's "Videos List.List" API Call Used To Get The VideoId
        var url = 'https://www.googleapis.com/youtube/v3/videos';

            url += '?' + $.param({
                'part': 'snippet,contentDetails',
                'key': 'AIzaSyBosREDOI_AxtNcHkvK--los4AS_CbUnhM',
                'id': '9hDKfBKuXjI' 
            });

            $.ajax({
                type: "GET",
                url: url
            }).done(function(result) {
                                
                // Console Log The Whole Response
                console.log("The whole video Api Call Result/Response >>>>>>>>>>>>>>");
                console.log(result);


                // Console Log The Video Title AND The VideoId
                console.log("videoId from the video Api Call Result/Response >>>>>>>>>>>>>>");
                console.log(result.items[0].snippet.title + ":" + result.items[0].id);                       

                // The VideoId Retrieved From The JSON Response
                var videoId1 = result.items[0].id;

                // Creates An Iframe For The video
                var video1HTML = '<li><iframe width="640" height="390" src="https://www.youtube.com/embed/' + videoId1 + '" frameborder="0" allowfullscreen></iframe></li><br/>';

                // Takes The Iframe We Created An Renders It To The HMTL Page 
                var finalHTML = video1HTML;

                $('#introtocodingvideos').append(finalHTML);
                      
            });  
    }
               
    videosCall();


});