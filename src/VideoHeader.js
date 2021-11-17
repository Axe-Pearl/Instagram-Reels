import React from "react";
import "./VideoHeader.css";
// import CameraAltIcon from '@mui/icons-material/CameraAlt';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import AdbIcon from '@material-ui/icons/Adb';

function VideoHeader(){
   return(
      <div className="videoHeader">
      
      <h3>Reels</h3>
      <AdbIcon />
      </div>
   );
}

export default VideoHeader;