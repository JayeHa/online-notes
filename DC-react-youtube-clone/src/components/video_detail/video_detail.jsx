import React from 'react';
import styles from './video_detail.module.css'

const VideoDetail = ({video, video:{snippet}}) => (
    <section className={styles.detail}>
        <iframe 
        className={styles.video}
        id="ytplayer" type="text/html" width="100%" height="500px"
        title="youtube video player"
        src={`https://www.youtube.com/embed/${video.id}`}
        frameBorder="0" allowFullScreen></iframe>
        <h2>{snippet.title}</h2>
        <h3>{snippet.channelTitle}</h3>
        <pre className={styles.description}>{snippet.description}</pre>
    </section>
);

export default VideoDetail;