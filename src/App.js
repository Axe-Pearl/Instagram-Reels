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
        <VideoCard 
          channel="Anurag"
          avatarSrc="https://miro.medium.com/fit/c/262/262/1*3vndmWLAO4KRp_rbcjPdow.jpeg"
          song="voice"
          url="http://techslides.com/demos/sample-videos/small.webm"
          likes={300}
          shares={50}
        />
        <VideoCard 
         channel="Anurag"
         avatarSrc="https://miro.medium.com/fit/c/262/262/1*3vndmWLAO4KRp_rbcjPdow.jpeg"
         song="voice"
         url="http://techslides.com/demos/sample-videos/small.webm"
         likes={300}
         shares={50}/>
        <VideoCard />

       
      </div>
    </div>
  );
}

export default App;
