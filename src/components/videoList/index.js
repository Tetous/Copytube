import React from 'react'
import VideoItem from '../videoItem'

function VideoList({videos}){

    console.log(videos)

    if(videos === null || videos === undefined || videos === []){
        return(<></>)

    }else{
        function listOfVideos(videos){
            return(
                videos.map((video, id) => {
                    return(
                        <VideoItem video={video} key={id}></VideoItem>
                    )
                })
            )
        }
    
        return(
            <div className="col-12 row">
                {listOfVideos(videos)}
            </div>
        )
    }
}

export default VideoList