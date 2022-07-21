import './app.css'
import logo from './iconbuku.png'
function App() {
  return (
  <>
   <div className="banner">
      <div className="navbar">
        <img src={logo} class="logo"/>
          <ul>
            <li><a href="#">home</a></li>
            <li><a href="#">bedroom</a></li>
            <li><a href="#">dining</a></li>
            <li><a href="#">kitchen</a></li>
            <li><a href="#">backyard</a></li>

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
   </div>
  </>
  );
}

export default App;
