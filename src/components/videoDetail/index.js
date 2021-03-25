import React from 'react'
import {Card, CardHeader, CardBody} from 'reactstrap'
import './styles.css'

function VideoDetail({video}){

    if(video === null || video === undefined){

        return(
            <><h1></h1></>
        )

    }else{

        const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
        
        return(
            <>
                <div className="videoHighlight col-12 d-flex justify-content-center">
                    <iframe className="rounded" frameBorder="0" height="100%" width="100%" title="Video Player" src={videoSrc}>
                    </iframe>
                </div>
                <div className="col-12 text-white mt-2">
                    <h4>{video.snippet.title} - {video.snippet.channel}</h4>
                    <p>{video.snippet.channelTittle}</p>
                </div>
            </>
        )
    }

}

export default VideoDetail