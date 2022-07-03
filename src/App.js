import Search from "./comps/Search";
import albums from "./comps/albums";
import Album from "./comps/Album";
import AlbumArt from "./assets/top-25-albums.jpg";
import Logo from "./assets/RollingStone.png";

const App = () => {

  return (
    <div className="container">
      <div className="heading">
        <img src={Logo} width="400px" height="auto" alt="RollingStone logo" />
        <h1 id="top" className="title">The 25 Best Selling<br/>Albums Of All Time</h1>
      </div>
      <div className="row albumart">
        <img src={AlbumArt} width="1000px" height="auto" alt="Best Selling Albums of all time" />
      </div>
      <div>
        <Search placeholder="Search Albums" data={albums}/>
      </div>
      <div className="row row-cols-1 row-cols-md-3">
        {albums.map((album) => {
          return (
            <div className="col mb-4">
              <Album key={album.id} {...album}/>
            </div>
          )
        })}
      </div>
      <div className="arrow">
        <i className="fa fa-arrow-up" aria-hidden="true"></i>
        <h1><a href="top">Back To Top</a></h1>
      </div>
      <footer>
        <h1>Web Design by Mike Dodson</h1>
        <div className="social-icons">
          <a href="https://www.facebook.com/michael.dodson.509" className="social-icon"><i className="fab fa-facebook hvr-float"></i></a>
          <a href="https://twitter.com/DreamosophyMike" className="social-icon"><i className="fab fa-twitter-square"></i></a>
        </div>
      </footer>
    </div>
  )
}

export default App;
