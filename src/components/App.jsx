// window.searchYouTube(
//         {q: 'dogs', key: YOUTUBE_API_KEY, max: 5},
//         (data) => { this.state.listVideo = data; }
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainPlayerVideo: fakeVideoData[0],
      listVideo: exampleVideoData,
      inputVal: 'horse'
    };
  }
  
  componentDidMount() {
    this.grabNewVids('donkey');
  }

  grabNewVids(query) {
    var options = {
      query: query,
      key: window.YOUTUBE_API_KEY,
    };

    this.props.searchYouTube(options, (data) => {
      this.setState({
        mainPlayerVideo: data[0],
        listVideo: data
      });
    });
  }
  
  onVideoClick(video) {
    this.setState({
      mainPlayerVideo: video,
    });

  }

  onChangeHandler(e) {
    this.setState({
      inputVal: e
    });
  }

  onSearchClick() {
    this.grabNewVids(this.state.inputVal);
  }

  render() {
    return (  
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><em><Search onChange = {this.onChangeHandler.bind(this)} searchClick = {this.onSearchClick.bind(this)}/></em></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><em></em> <VideoPlayer video = {this.state.mainPlayerVideo}/></div>
          </div>
          <div className="col-md-5">
            <div><em></em> <VideoList videoClick = {this.onVideoClick.bind(this)} videos={this.state.listVideo}/></div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em></em><Search /></h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <div><h5><em></em> <VideoPlayer video={fakeVideoData[0]}/></h5></div>
//       </div>
//       <div className="col-md-5">
//         <div><h5><em></em> <VideoList videos={exampleVideoData}/> </h5></div>
//       </div>
//     </div>
//   </div>
// );
