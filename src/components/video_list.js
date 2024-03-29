import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
	
	const videoItems = props.videos.map((video) => {
		return (
			<VideoListItem 
				key={video.etag}
				onVideoSelect={props.onVideoSelect}
				video={video} />
		);
	});

	return(
		<ul className="list-group col-lg-4">
			{videoItems}
		</ul>
	);
}

export default VideoList;