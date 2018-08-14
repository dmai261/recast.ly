var searchYouTube = (options, callback) => {
  // TODO
//   var results = YouTube.search.list('id, snippet', {q:'dogs', maxResults: 25});
// console.log(results);
  $.ajax( {
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    
    data: {
      q: options.query, 
      maxResults: options.max,  
      key: options.key, 
      part: 'snippet'
    },
    
    videoEmbeddable: true,
    success: function(data) {
      console.log('SUCCESS');
      callback(data);
      
    },
    error: function (data) {
      console.log('error');
      
    }
  });
};

window.searchYouTube = searchYouTube;

//key = AIzaSyDr1Di2OLmtk8vtWUMQkxba97UrFpraHcA