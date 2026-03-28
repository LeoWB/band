import GigList from "../components/Gigs.js";

import "../styles/Home.css";

import homephoto from "../gallery/3.jpg";

export default function Home() {
  return (
    <div id="main">
      <div className="top">
        <p className="description">
          Based in London. A shoegaze / post-hardcore band.
        </p>
        <img src={homephoto} className="homephoto"></img>
      </div>

      <GigList></GigList>
    </div>
  );
}
