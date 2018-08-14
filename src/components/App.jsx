class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainPlayerVideo: fakeVideoData[0],
      listVideo: exampleVideoData,
    };
  }

  onVideoClick(video) {
    this.setState({
      mainPlayerVideo: video,
    });

  }
  render() {
    //console.log(this.state.mainPlayerVideo);
    return (  
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search /><h5><em></em></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em></em> <VideoPlayer video = {this.state.mainPlayerVideo}/></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em></em> <VideoList videoClick = {this.onVideoClick.bind(this)} videos={this.state.listVideo}/> </h5></div>
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
