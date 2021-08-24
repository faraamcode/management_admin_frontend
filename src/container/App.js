import NavBar from '../components/Navbar'
import { BrowserRouter } from 'react-router-dom'
import { Wrapper } from '../common/Global.Style'
import Home from '../pages/Home'
function App () {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Home />
      </BrowserRouter>
    </>
  )
}

export default App
