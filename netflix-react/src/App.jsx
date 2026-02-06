import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import CarouselNetflix from "./components/CarouselNetflix"
import Account from "./components/Account"

function App() {
  return (
    <>
      <NavBar />
      <CarouselNetflix title="Trending Now" query="avengers" />
      <CarouselNetflix title="Watch it Again" query="batman" />
      <CarouselNetflix title="New Releases" query="star wars" />
      <Footer />
      {/* <Account /> */}
    </>
  )
}

export default App
