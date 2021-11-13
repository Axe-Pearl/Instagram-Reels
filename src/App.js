import './App.css';
import VideoCard from "./VideoCard";
function App() {
  return (
    <div className="app">
      <div className="app_top">
        <img 
        className="app_logo"
        src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png"
        alt="insta-logo"
        />
        <h1>Reels</h1>
      </div>
      <div className="app_videos">
        <VideoCard />
        <VideoCard />
        <VideoCard />

       
      </div>
    </div>
  );
}

export default App;
