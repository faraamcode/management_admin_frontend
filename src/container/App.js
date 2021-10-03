import NavBar from '../components/Navbar'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Wrapper } from '../common/Global.Style'
import Home from '../pages/Home/index'
import Footer from '../components/Footer'
import DashboardLayout from './Layout'
import Login from '../pages/AuthPage/login'
import PasswordReset from '../pages/AuthPage/password-reset'
import { AuthServiceProvider } from '../services/auth.service'
function App () {
  return (
    <>
      <AuthServiceProvider>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/dashboard' component={DashboardLayout} />
            <Route exact path='/password/reset' component={PasswordReset} />
          </Switch>
          {/* <Footer /> */}
        </BrowserRouter>
      </AuthServiceProvider>
    </>
  )
}

export default App
