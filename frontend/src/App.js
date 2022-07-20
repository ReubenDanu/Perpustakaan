import './app.css'
import logo from './iconbuku.png'
function App() {
  return (
  <>
    <div className="topnav">
      <a className="active" href="#home">home</a>
      <a href="#create">create</a>
      <a href="#update">update</a>
      <a href="#delete">delete</a>
      <a href="get">get book</a>
      <a href="#about">about</a>
    </div>
    <img src={logo} className="app-logo" alt="iconbuku"/>


    <div className='book-buku'>
      <p>judul buku</p>
      <p>penerbit</p>
      <p>penulis</p>
    </div>
  </>
  );
}

export default App;
