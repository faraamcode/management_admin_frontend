import React from 'react'
import styled from 'styled-components'
import { Route, Switch, useHistory } from 'react-router'
import DashboardHome from '../pages/Dashboard'
import SideBar from '../components/SideBar'
import { useAuthContext } from '../services/auth.service'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../redux/Actions/ProfileActionCreator'

export default function Layout () {
  const history = useHistory()
  const { token } = useAuthContext()
  const dispatch = useDispatch()

  React.useEffect(() => {
    if (token) {
      dispatch(fetchUser(token))
    }
  }, [])

  // if (!token || token == null) {
  //   history.replace('/login')
  // }
  const Wrapper = styled.div`
    width: 100%;
    min-height: 90vh;

    display: flex;
  `
  return (
    <Wrapper>
      <SideBar />
      <Route exact path='/dashboard/about' component={DashboardHome} />
      <Route exact path='/dashboard/hero' component={DashboardHome} />
    </Wrapper>
  )
}
