import './app.css'
import logo from './iconbuku.png'
function App() {
  return (
  <>
   <div className="banner">
      <div className="navbar">
        <img src={logo} class="logo" alt="logo"/>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#buku">Buku</a></li>
            <li><a href="#rak">Rak Buku</a></li>
            <li><a href="#top-buku">Top Buku</a></li>
            <li><a href="#about">About</a></li>

          </ul>
      </div>
          <div className="content"> 
          <h1>Perpuskaan</h1>
          <p>Mari kita membaca bersama di Perpuskaan</p>
          <div>            
            <button type="button"><span></span>Baca Buku</button>
           <button type="button"><span></span>Cari Buku</button>
           <button type="button"><span></span>update</button>
           <button type="button"><span></span>hapus Buku</button>
           <button type="button"><span></span>tambah Buku</button>
          </div>
        </div>
        <div>
          <div className="about" id="about">
            
          </div>
        </div>
   </div>
  </>
  );
}

export default App;
