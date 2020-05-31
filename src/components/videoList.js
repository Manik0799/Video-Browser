import React from "react";
import VideoItem from "./videoItem";

function VideoList(props){

    const renderVideos= (props.videos).map( (video) =>{

        return <VideoItem 
                    key= {video.id.videoId} 
                    whenVideoSelected= {props.whenVideoSelected} 
                    video= {video}
                />
    });

    return(
        <div className="ui relaxed divided list">
            {renderVideos}
        </div>
    )
}

export default VideoList;