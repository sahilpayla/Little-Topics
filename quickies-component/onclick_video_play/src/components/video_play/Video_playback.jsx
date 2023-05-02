import React, { useState } from "react";
import style from './Video.module.css';
import video1 from '../../images_videos/RareTalent_video.mp4';


function VideoPlayer() {
    const [showVideo, setShowVideo] = useState(false);

    return (
        <div>
            <div className={style.play_button}>
                <button
                    className={style.playButton}
                >
                    <i
                        onClick={() => setShowVideo(!showVideo)}
                        class="fa-solid fa-circle-play"></i>
                </button>
            </div>

            <div className={style.line1}>
                Click on the Play Button
            </div>

            {showVideo ? (
                <div className={style.video_container}>
                    <video
                        src={video1} autoPlay loop muted />
                    <button
                        className={style.close_button}
                        onClick={() => setShowVideo(false)}>

                    </button>
                </div>
            ) : null}
        </div>
    );
}

export default VideoPlayer;
