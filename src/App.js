import Search from "./comps/Search";
import albums from "./comps/albums";
import Album from "./comps/Album";
import AlbumArt from "./assets/top-25-albums.jpg";
import Logo from "./assets/RollingStone.png";

const App = () => {

  const today = new Date();

  return (
    <div className="container">
      <div className="heading">
        <img src={Logo} width="400px" height="auto" alt="RollingStone logo" />
        <h1 className="title">
          The 25 Best Selling<br/>Albums Of All Time
        </h1>
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
      <footer>
      <h1>
          &copy; Mike Dodson
          <span> {today.getFullYear()}</span>.
        </h1>
        <div className="social-icons">
          <a href="https://github.com/newdevmike22" className="social-icon"><i class="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/michael-dodson-197231b9/" className="social-icon"><i class="fab fa-linkedin"></i></a>
        </div>
      </footer>
    </div>
  )
}

export default App;

