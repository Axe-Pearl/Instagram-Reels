import React from "react";
import "./VideoFooter.css";
import {Button, Avatar } from "@material-ui/core";
import MusicNote from "@material-ui/icons/esm/MusicNote";
import Favorite from "@material-ui/icons/esm/Favorite";
import ModeComment from "@material-ui/icons/esm/ModeComment";
import Send from "@material-ui/icons/esm/Send";
import MoreHoriz from "@material-ui/icons/esm/MoreHoriz";
import Ticker from 'react-ticker';


function VideoFooter({channel,likes,shares,avatarSrc,song}){
   return(
       <div className="videoFooter">
           <div className="videoFooter_text">
               <Avatar src = {avatarSrc} />
               <h3>{channel} <Button>Follow</Button></h3>
           </div>
           
           <div className="videoFooter_ticker">
             <MusicNote 
             className="videoFooter_icon"/>
             <Ticker mode="smooth">
          {({ index }) => (
              <>
                  <h1> { song } </h1>
              </>
          )}
        </Ticker>

        <div className="videoFooter_actions">
            <div className="videoFooter_actionsLeft">
              <Favorite font-size="large" />
              <ModeComment font-size="large" />
              <Send font-size="large" />
              <MoreHoriz font-size="large" />
            </div>

            <div className="videoFooter_actionsRight">
                <div className="videoFooter_stat">
                <Favorite />
                <p>{likes}</p>
                </div>
                <div className="videoFooter_stat">
                <ModeComment />
                <p>{shares}</p>
                </div>
    
            </div>
                <Send fontSize="large" z-index="1" />
            </div>
        </div>
    </div>
   )
}

export default VideoFooter;

