import React from 'react'
import styled from 'styled-components'
import DashboardHome from '../pages/Dashboard'
import SideBar from '../components/SideBar'

export default function Layout () {
  const Wrapper = styled.div`
    width: 100%;
    min-height: 90vh;
    
    display: flex;
  `
  return (
    <Wrapper>
      <SideBar />
      <DashboardHome />
    </Wrapper>
  )
}
