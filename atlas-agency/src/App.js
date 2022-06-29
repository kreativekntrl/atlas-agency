import './App.scss';
import NavBar from './components/NavBar.js';
import Article from './components/Article.js';
import Main from './components/Main.js';
import Aside from './components/Aside.js';
import Footer from './components/Footer.js';

function App() {
  return (
<div className="page-wrap">
  <header className="page-header">
    Atlas Agency
    <NavBar />
  </header>
  <article className="page-art">
    Art 
    <Article />
  </article>
  <main className="page-main">
    main
    <Main />
  </main>
  <aside className="page-sidebar">
    Aside
    <Aside />
  </aside>
  <footer className="page-footer">
    Footer
    <Footer />
  </footer>
</div>
  );
}

export default App;
