import NavBar from '../components/Navbar'
import { BrowserRouter } from 'react-router-dom'
import { Wrapper } from '../common/Global.Style'
import Home from '../pages/Home/index'
import Footer from '../components/Footer'
import Layout from './Layout'
function App () {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        {/* <Layout /> */}
        <Home />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
