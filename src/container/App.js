import NavBar from '../components/Navbar'
import { BrowserRouter } from 'react-router-dom'
import { Wrapper } from '../common/Global.Style'
import Home from '../pages/Home/index'
import Footer from '../components/Footer'
function App () {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Home />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
