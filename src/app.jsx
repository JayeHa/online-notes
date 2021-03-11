import React, { useCallback, useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoDetail from './components/video_detail/video_detail';
import VideoList from './components/video_list/video_list';

function App({youtube}) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  }

  const search = useCallback(query => {
      youtube.search(query)
      .then(videos => {
        setVideos(videos);
        setSelectedVideo(null);
      });
    }, [youtube]);
    // useCallback은 한 번 만들면 메모리상에 계속 보관하기 때문에 메모리에 많은 영향이 갈 수 있음
    // 자식컴포넌트에 props로 전달할 때 계속 새로운 콜백을 전달하면 자식컴포넌트가 re-render될 수 있으니까 이 때만 useCallback을 사용해야 함
    // 자식컴포넌트가 아니라 간단한 JSX를 이용한 div나 button 등 이벤트를 처리하는 콜백으로 전달할 때는
    // 새로운게 전달되도 re-render가 발생되지 않으니까 크게 상관 ㄴㄴ
    // 잘 구분해서 사용하세요!
  
  useEffect(() => {
    youtube.mostPopular() //
    .then(videos => setVideos(videos))
    }, [youtube]);

    
  return(
  <div className={styles.app}>
    <SearchHeader onSearch={search}/>
    <section className={styles.content}>
    { selectedVideo && (
      <div className={styles.detail}>
        <VideoDetail video={selectedVideo}/>
      </div>
      )}
      <div className={styles.list}>
        <VideoList videos={videos} onVideoClick={selectVideo} display={selectedVideo ? 'list' : 'grid'}/>
      </div>
    </section>
  </div>
  );
}

export default App;
