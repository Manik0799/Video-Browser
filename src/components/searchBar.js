import React from "react";

class SearchBar extends React.Component{

    state= {searchText: ""};

    handleInputChange = (event) =>{
        this.setState({searchText: event.target.value});
    }

    handleFormSubmit = (event) =>{
        // Prevents default loading when submitted
        event.preventDefault();
        // Passes the search text to app.js so as to make a GET call to the API
        this.props.whenFormSubmitted(this.state.searchText);
    }

    render(){
        return(
            <div className= "ui segment">

                <form className="ui form" onSubmit= {this.handleFormSubmit}>
                    <div className="field">
                        <label>Search for video</label>
                        <input 
                            type="text" 
                            value= {this.state.searchText}
                            placeholder="Trending" 
                            onChange= {this.handleInputChange} />
                    </div>
                </form>
                
            </div>
        )
    }
}

export default SearchBar;