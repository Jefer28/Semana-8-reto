
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Section from './components/Section';
import Sectiondog from './components/Sectiondog';
import Footer from './components/Footer';

function App() {

  const routeLinks = [
    { href: '#cat', title: 'Gatitos', content: 'Gatitos' },
    { href: '#dog', title: 'Perritos', content: 'Perritos' },
  ];

  const socialNetworks = [
    { href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', title: 'YouTube', content: '<i class="bi bi-youtube"></i>' },
  ];

  window.addEventListener("scroll", function () {
    var header = document.querySelector("header")
    if (window.scrollY > 0) {
      header.style.backgroundColor = "#413f3fe0";
    } else {
      header.style.backgroundColor = "transparent";
    }
  })
  return (
    <>
      <Header
        routeLinks={routeLinks}
        socialNetworks={socialNetworks}
      />
      <main>
        <Hero />
        <Section />
        <Sectiondog />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App;
