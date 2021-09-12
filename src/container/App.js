import NavBar from '../components/Navbar'
import { BrowserRouter } from 'react-router-dom'
import { Wrapper } from '../common/Global.Style'
import Home from '../pages/Home/index'
import Footer from '../components/Footer'
import Layout from './Layout'
import Login from '../pages/AuthPage/login'
import PasswordReset from '../pages/AuthPage/password-reset'
function App () {
  return (
    <>
      <BrowserRouter>
        {/* <Login /> */}
        <PasswordReset />
        {/* <NavBar /> */}
        {/* <Layout /> */}
        {/* <Home /> */}
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  )
}

export default App
