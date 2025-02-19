//importiamo da components Header, Main e Footer 

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
// import './App.css'


function App() {

  const linksHeader = [
    { id: 1, text: "CHARACTERS", url: "#", current: false },
    { id: 2, text: "COMICS", url: "#", current: true },
    { id: 3, text: "MOVIES", url: "#", current: false },
    { id: 4, text: "TV", url: "#", current: false },
    { id: 5, text: "GAMES", url: "#", current: false },
    { id: 6, text: "COLLECTIBLES", url: "#", current: false },
    { id: 7, text: "VIDEOS", url: "#", current: false },
    { id: 8, text: "FANS", url: "#", current: false },
    { id: 9, text: "NEWS", url: "#", current: false },
    { id: 10, text: "SHOP", url: "#", current: false }
  ];

  return (
    <>
    <Header link={linksHeader} />
    <Main />
    <Footer />
    </>
  )
}

export default App
