import React, { useState } from "react";
import style from './Video.module.css';
import video1 from '../../images_videos/InMyHead.mp4';


function VideoPlayer() {
    const [showVideo, setShowVideo] = useState(false);

    return (
        <div>
            <button
                className={style.play_button}
                onClick={() => setShowVideo(true)}
            >
                
            </button>

            {showVideo ? (
                <div className={style.video_container}>
                    <video src={video1} autoPlay loop />
                    <button onClick={() => setShowVideo(false)}>x</button>
                </div>
            ) : null}
        </div>
    );
}

export default VideoPlayer;
