import './App.css';
import React from 'react';

import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';
import { PlayList } from '../PlayList/PlayList';
import Spotify from '../../util/Spotify'

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      searchResults: [{name: 'name1', artist: 'artist1', album:'album1', id:1}, 
                      {name: 'name2', artist: 'artist2', album:'album2', id:2}],
      playlistName: "Sushirocks",
      playlistTracks: [{name: 'name3', artist: 'artist1', album:'album1', id:3}, 
                       {name: 'name4', artist: 'artist2', album:'album2', id:4}]
    }

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    } else {
      tracks.push(track);
      this.setState({ playlistTracks: tracks });
    }
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    const newTracks = tracks.filter(savedTrack => {
                return savedTrack.id !== track.id;
    })
    this.setState({ playlistTracks: newTracks });
  }

  updatePlaylistName(name) {
    this.setState({ playlistName: name })
  }

  savePlaylist() {
    const trackUris = this.state.playlistTracks.map(track => track.uri);
  }

  search(term) {
    Spotify.search(term).then(searchResults => {
      this.setState({searchResults: searchResults})
    });
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search}/>
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults}
                           onAdd={this.addTrack} />
            <PlayList playlistName={this.state.playlistName} 
                      playlistTracks={this.state.playlistTracks}
                      onRemove={this.removeTrack}
                      onNameChange={this.updatePlaylistName}
                      onSave={this.savePlaylist}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
