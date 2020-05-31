import React from "react";

function SelectedVideo(props){

    // To cover the initial case when no video has been selected
    if(!props.video){
        return(
            <div style= {{marginTop: "20px"}}>Loading .... </div>
        );
    }

    const videoSrc= `https://www.youtube.com/embed/${props.video.id.videoId}?autoplay=1`;

    // console.log(props.video);

    return(
        <div>

                <div className= "ui embed" >
                    <iframe title= "player" src={videoSrc} ></iframe>
                </div>

                <div className="ui segment" style= {{marginTop: "20px"}}>
                    <div className="ui header">
                        {props.video.snippet.title}
                    </div>
                    <p>{props.video.snippet.description}</p>
                </div>
        </div>
    )
}

export default SelectedVideo;