import React ,{useState,useRef} from 'react';
import "./VideoCard.css";
import VideoHeader from './VideoHeader';
function VideoCard() { 
    const [IsVideoPlaying,setIsVideoPlaying] = useState(false);
    const vedioref  = useRef(null);   
    
    const onVedioPress = ()=>{
        if(IsVideoPlaying){
            console.log(vedioref.current);
            vedioref.current.pause();
            setIsVideoPlaying(false);
        }
        else{
            console.log(vedioref.current);
             vedioref.current.play();
             setIsVideoPlaying(true);
            // setIsVideoPlaying = true;
        }
    }
    return (
        <div className="videoCard">
            <VideoHeader />
            <video
             ref={vedioref}
             className="video_player"
             onClick = {onVedioPress}
             src= "http://techslides.com/demos/sample-videos/small.webm" type="video/webm"
            //  src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fishafoundation%2Fvideos%2F10155643927329947%2F&width=500&show_text=false&height=280&appId"
             alt="reel video"
            />
        </div>
    )
}  

export default VideoCard;
// https://www.instagram.com/reel/CVXpnpLMBuw/?utm_source=ig_web_copy_link
            // 