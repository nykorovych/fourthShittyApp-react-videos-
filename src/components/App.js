import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const KEY = "AIzaSyDJ6taxsVRcJKUjBVxECpozoOd80iMlIx4";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const [videos, search] = useVideos("gachibass");

  useEffect(() => {
    setSelectedVideo(videos[0])
  })

  //     setSelectedVideo(res.data.items[0]);

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search}></SearchBar>
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo}></VideoDetail>
          </div>
          <div className="five wide column">
            <VideoList
              onVideoSelect={setSelectedVideo}
              videos={videos}
            ></VideoList>
          </div>
        </div>
      </div>
    </div>
  );
};

// class App extends React.Component {

// state = { videos: [], selectedVideo: null };

// componentDidMount(){
//   this.onTermSubmit('gachibass')
// }
// onTermSubmit = async (search) => {
//   const res = await youtube.get("/search", {
//     params: {
//       part: "snippet",
//       maxResults: 5,
//       key: KEY,
//       q: search,
//     },
//   });
//   this.setState({ videos: res.data.items, selectedVideo: res.data.items[0] });
// };
// onVideoSelect = (video) => {
//   console.log(video);
//   this.setState({ selectedVideo: video });
// };
//   render() {
//   //   return (
//   //     <div className="ui container">
//   //       <SearchBar onFormSubmit={this.onTermSubmit}></SearchBar>
//   //       <div className="ui grid">
//   //         <div className="ui row">
//   //           <div className="eleven wide column">
//   //             <VideoDetail video={this.state.selectedVideo}></VideoDetail>
//   //           </div>
//   //           <div className="five wide column">
//   //             <VideoList
//   //               onVideoSelect={this.onVideoSelect}
//   //               videos={this.state.videos}
//   //             ></VideoList>
//   //           </div>
//   //         </div>
//   //       </div>
//   //     </div>
//   //   );
//   // }
// }

export default App;
