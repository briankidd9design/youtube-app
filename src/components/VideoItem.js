import React from "react";
import './VideoItem.css';

// every video item component is going to receive a separte video object
//each video item will be customized to diplay a slightly different video

// const VideoItem = (props) => {

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    // <div>Video Item</div>
    //click on this item below to invoke onVideoSelect in the App component
    //When communicating from the parent to the child component we use props
    //When communicating from the child to the parent component we can make use of callbacks
    <div onClick={() => onVideoSelect(video) } className="video-item item">
      <img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.medium.url} />
        <div className="content">
            <div className="header"></div>{video.snippet.title}
        </div>
    </div>
  );
};

export default VideoItem;
