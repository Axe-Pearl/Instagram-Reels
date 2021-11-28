import React from "react";
import "./VideoHeader.css";
import CameraAlt from '@material-ui/icons/CameraAlt';
import ArrowLeft from "@material-ui/icons/esm/ArrowLeft";
import ArrowBackIos from "@material-ui/icons/esm/ArrowBackIos";
function VideoHeader(){
   return(
      <div className="videoHeader">
      
      <ArrowBackIos />
      <h3>Reels</h3>
      <CameraAlt />
      </div>
   );
}

export default VideoHeader;