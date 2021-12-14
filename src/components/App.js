import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from '../hooks/useVideos';

const App = () => {
  
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos("How to use YouTube");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);
  // setSelectedVideo(response.data.items[0]);

  //this is where the term that is entered uses axios in the youtube.js file to return the api's data


  return (
    <div className="ui container">
      {/* the prop and the callback function do not have to have the same name */}
      <SearchBar onFormSubmit={search} />
      {/* above the SearchBar uses the prop of onFormSubmit that data, the term, is then assigned to the onTermSubmit method */}
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            {/* The video detail component renders the selected, clicked-on video */}
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              // onVideoSelect={onVideoSelect}
              onVideoSelect={(video) => setSelectedVideo(video)}
              videos={videos}
            />
          </div>
        </div>
      </div>
      {/* I have {this.state.videos.length} videos. */}
    </div>
  );
};


export default App;
