var searchYouTube = (options, callback) => {
  $.ajax( {
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      type: 'video',
      q: options.query, 
      maxResults: options.max,  
      key: options.key,
      videoEmbeddable: 'true',
      part: 'snippet'
    },
    success: function(data) {
      console.log('SUCCESS');
      callback(data.items);
    },
    error: function (data) {
      console.log('error');
    }
  });
};

window.searchYouTube = searchYouTube;

//key = AIzaSyDr1Di2OLmtk8vtWUMQkxba97UrFpraHcA