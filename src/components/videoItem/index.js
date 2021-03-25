import React from 'react'

function VideoItem({video}){
    if(video === null || video === undefined || video === []){
        return(<></>)
    }else{
        return(
            <div className="col-12 d-flex justify-content-center"> 
                <img src={video} alt="" style={{marginRight: '20px'}} alt="Thumbnail" src={video.snippet.thumbnails.medium.url}/>
                <p className="font-weight-bold">{video.snippet.title}</p>
            </div>
        )
    }
}

export default VideoItem