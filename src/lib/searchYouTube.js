var searchYouTube = (options, callback) => {
  var results;
  $.ajax( {
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      part: 'snippet',
      q: options.query, 
      maxResults: options.max,  
      key: options.key,
      videoEmbaddable: 'true',
      type: 'video'
    },
    success: function(data) {
      console.log(data);
      console.log('SUCCESS');
      callback(data.items);
      results = data.items;
    },
    error: function (data) {
      console.log('error');
    }
  });
  return results;
  console.log(results);
};

window.searchYouTube = searchYouTube;
//console.log(window.searchYouTube);

//key = AIzaSyDr1Di2OLmtk8vtWUMQkxba97UrFpraHcA