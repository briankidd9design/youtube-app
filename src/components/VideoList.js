import React from 'react';
import VideoItem from './VideoItem.js';


// const VideoList = (props) => {
const VideoList = ({ videos, onVideoSelect }) => {
    // videos = this.props;
    // const { videos } = this.props;
    //props.videos: the array of videos that will be rendered as HTML to the screen
    //This function will be called one time for every object inside the videos array
   const renderedList = videos.map((video) => {
       //VideoItem is a component that is passed down to the VideoItem component
       //Both the onVideoSelect and video props will be passed tot he VideoItem component
        return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />
    });
    // return<div>I have {videos.length} vids</div>
    return <div className="ui relaxed divided list">{renderedList}</div>
};

export default VideoList;