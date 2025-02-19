//importiamo da components Header, Main e Footer 

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
// import './App.css'


function App() {
  // array header
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
  // array footer
  const linksEntries1 = [
    { id: 1, text: 'Characters', url: '#', current: false },
    { id: 2, text: 'Characters', url: '#', current: false },
    { id: 3, text: 'Comics', url: '#', current: false },
    { id: 4, text: 'Movies', url: '#', current: false },
    { id: 5, text: 'TV', url: '#', current: false },
    { id: 6, text: 'Games', url: '#', current: false },
    { id: 7, text: 'Videos', url: '#', current: false },
    { id: 8, text: 'News', url: '#', current: false },
  ];
  const linksEntries2 = [
    { id: 1, text: 'SHOP', url: '#', current: false },
    { id: 2, text: 'Shop DC', url: '#', current: false },
    { id: 3, text: 'Shop DC Collectibles', url: '#', current: false },
  ];
  const linksEntries3 = [
    { id: 1, text: 'DC', url: '#', current: false },
    { id: 2, text: 'Terms Of Use', url: '#', current: false },
    { id: 3, text: 'Privacy policy (New)', url: '#', current: false },
    { id: 4, text: 'Ad Choices', url: '#', current: false },
    { id: 5, text: 'Advertising', url: '#', current: false },
    { id: 6, text: 'Jobs', url: '#', current: false },
    { id: 7, text: 'Subscriptions', url: '#', current: false },
    { id: 8, text: 'Talent Workshop', url: '#', current: false },
    { id: 9, text: 'CPSC Certificates', url: '#', current: false },
    { id: 10, text: 'Ratings', url: '#', current: false },
    { id: 11, text: 'Shop Help', url: '#', current: false },
    { id: 12, text: 'Contact Us', url: '#', current: false },
  ];
  const linksEntries4 = [
    { id: 1, text: 'SITES', url: '#', current: false },
    { id: 2, text: 'DC', url: '#', current: false },
    { id: 3, text: 'MAD Magazine', url: '#', current: false },
    { id: 4, text: 'DC Magazine', url: '#', current: false },
    { id: 5, text: 'DC Universe', url: '#', current: false },
    { id: 6, text: 'DC Power Visa', url: '#', current: false },
  ];


  return (
    <>
    <Header link={linksHeader} />
    <Main />
    <Footer 
      linkFooter1={linksEntries1}
      linkFooter2={linksEntries2}
      linkFooter3={linksEntries3}
      linkFooter4={linksEntries4}
    />
    </>
  )
}

export default App
