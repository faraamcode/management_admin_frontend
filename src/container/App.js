import NavBar from '../components/Navbar'
import { BrowserRouter } from 'react-router-dom'
import { Wrapper } from '../common/Global.Style'
import Home from '../pages/Home/index'
import Footer from '../components/Footer'
import Layout from './Layout'
import Login from '../pages/Login'
function App () {
  return (
    <>
      <BrowserRouter>
        <Login />
        {/* <NavBar /> */}
        {/* <Layout /> */}
        {/* <Home /> */}
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  )
}

export default App
