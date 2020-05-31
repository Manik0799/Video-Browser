import React from "react";
import "./videoItem.css";

function VideoItem(props){
    return(

        // This callback is going to App.js 
            <div className=" video-item item" onClick= {() => props.whenVideoSelected(props.video)}>

                {/* Getting the video thumbnail */}
                <img className= "ui image" src= {props.video.snippet.thumbnails.medium.url} alt="video thumbnail"></img>

                <div className="content">

                        <div className="header">
                        {/* Getting the video title */}
                            {props.video.snippet.title}
                        </div>

                        <div className="description">
                        {/* Getting the video description */}
                            {props.video.snippet.description}
                        </div>
                </div>

            </div>
        
    )
}

export default VideoItem;