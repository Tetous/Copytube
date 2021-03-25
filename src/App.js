import React, {useState} from 'react';
import './App.css';
import youtube from './api/youtube'
import SearchBar from './components/searchBar'
import VideoDetail from './components/videoDetail'
import VideoList from './components/videoItem'

function App() {

  const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState(null)

  async function onFormSubmit(search){
    const response = await youtube.get('search', {
      params: {
        part: 'snippet', 
        maxResults: 5, 
        key: '', 
        q: search
      }
    });
    
    setVideos(response.data.items)
    setSelectedVideo(response.data.items[0])

  }

  return (
    <div className="App">
      <div className="container-fluid page">
        <SearchBar func={onFormSubmit}></SearchBar>
        <div className="row mt-5 ml-4">
          <div className="col-12 col-md-8 row d-flex justify-content-center">
              <VideoDetail video={selectedVideo}></VideoDetail>
          </div>
          <div className="col-4 row">
              <VideoList videos={videos}></VideoList>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
