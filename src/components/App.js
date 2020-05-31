import React from "react";
import SearchBar from "./searchBar";
import axios from "axios";
import VideoList from "./videoList";
import SelectedVideo from "./selectedVideo";

class App extends React.Component{

    state= {videos: [], selectedVideo: null};

    componentDidMount(){
        this.onSubmission("evolution of youtube");
    }

    onSubmission = async (searchText)=>{

        // API KEY youtube
        const KEY= "AIzaSyCKn-v53Z3DmoL6-LbgzyboRpQKN9l1diA";

        // Getting the Search Text by passing the fxn as a prop to searchBar.js ans using axios to make request to API
        const response=  await axios.get("https://www.googleapis.com/youtube/v3/search", {
            params: {
                q: searchText,
                part: "snippet",
                key: KEY,
                maxResults: 10
            }
        });

    // Setting the stae when we receive the data from the API
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    }

    onVideoSelect = (video) =>{
        // Setting the state of the selected video so as to send it to other Component
        this.setState({selectedVideo: video});
    }

    render(){
        return(
            <div className= "ui container" style={{marginTop: "20px"}}>
                <SearchBar whenFormSubmitted= {this.onSubmission}/>

                <div className= "ui grid">
                    <div className= "ui row">
                        <div className= "nine wide column">
                            <SelectedVideo video= {this.state.selectedVideo}/>
                        </div>
                        <div className="seven wide column">
                            <VideoList whenVideoSelected= {this.onVideoSelect} videos= {this.state.videos}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;