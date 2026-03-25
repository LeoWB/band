import insignia from "../images/insignia.png";
import killtaker from "../images/killtaker.png";

import "../styles/Header.css";

export default function Header() {
  return (
    <header>
      <a href="/">
        <div className="logo">
          <img src={insignia}></img>
          {/* <img src={killtaker} href="/" className="title"></img> */}
          <h1>killtaker</h1>
        </div>
      </a>
      <nav>
        <a className="page-links" href="/gallery">
          Gallery
        </a>
        <a className="page-links" href="/contact">
          Mailing
        </a>
      </nav>
    </header>
  );
}
