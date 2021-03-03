import React from 'react';
import styles from './videoList.module.css';

const VideoItem = props => (
    <div className={styles.video}>
        <img className={styles.img} src={props.video.snippet.thumbnails.medium.url} alt=""/>
        <div className={styles.video_info}>
        <h4 className={styles.title}>{props.video.snippet.title}</h4>
        <p className={styles.channel_title}>{props.video.snippet.channelTitle}</p>
        </div>
    </div>
)

export default VideoItem;