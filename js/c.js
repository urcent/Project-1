"use strict";

$(document).ready(function () {

           // The Second Function Is Called Within This First Function
           function videosCall1 (){

                // API Call STEP #1: You Tube Data API's "Videos List.List" API Call Used To Get The VideoId
                var url = 'https://www.googleapis.com/youtube/v3/videos';
                  url += '?' + $.param({
                      'part': 'snippet,contentDetails',
                      'key': 'AIzaSyBosREDOI_AxtNcHkvK--los4AS_CbUnhM',
                      'id': "Rub-JsjMhWY" 
                  });

                  $.ajax({
                      type: "GET",
                      url: url
                  }).done(function(result) {
                            
                        // Console Log The Whole Response
                        console.log("The Whole Video API Call Result/Response >>>>>>>>>>>>>>");
                        console.log(result);

                        // Get The VideoId From The JSON Response
                        var videoId1 = result.items[0].id;
                      
                        // Creates An Iframe For The video
                        console.log("videoId from the video Api Call Result/Response >>>>>>>>>>>>>>");
                        console.log(result.items[0].snippet.title + ":" + result.items[0].id);
                  
                        // Creates An Iframe For The video
                        var video1HTML = '<li><iframe width="640" height="390" src="https://www.youtube.com/embed/' + videoId1 + '" frameborder="0" allowfullscreen></iframe></li><br/>';

                        videosCall2(video1HTML);
                    
                  });  
           }
           

           
  
        function videosCall2 (video1HTML){

            console.log("video1", video1HTML);
          
                 // API Call STEP #1: You Tube Data API's "Videos List.List" API Call Used To Get The VideoId
                        var url = 'https://www.googleapis.com/youtube/v3/videos';
                          url += '?' + $.param({
                              'part': 'snippet,contentDetails',
                              'key': 'AIzaSyBosREDOI_AxtNcHkvK--los4AS_CbUnhM',
                              'id': "MhYECGUzdA4" 
                          });
                          $.ajax({
                              type: "GET",
                              url: url
                          }).done(function(result) {
                                    
                                // Console Log The Whole Response
                                console.log("The Whole Video API Call Result/Response >>>>>>>>>>>>>>");
                                console.log(result);


                                console.log("videoId from the video Api Call Result/Response >>>>>>>>>>>>>>");
                                console.log(result.items[0].snippet.title + ":" + result.items[0].id);

                                // Get The VideoId From The JSON Response
                                var videoId2 = result.items[0].id;
                                
                                // Creates An Iframe For The Video
                                var video2HTML = '<li><iframe width="640" height="390" src="https://www.youtube.com/embed/' + videoId2 + '" frameborder="0" allowfullscreen></iframe></li><br/>';
                                
                                // Takes The Playlist Iframes We Created For Videos 1 and 2 An Renders Them To The HMTL Page 
                                var finalHTML = video1HTML + video2HTML;
                                $('#cvideos').append(finalHTML)

                                // Console Log The Concatenated Iframes
                                console.log("finalHTML", finalHTML);
                          
                          });  
                   }
                   
                   videosCall1();

});