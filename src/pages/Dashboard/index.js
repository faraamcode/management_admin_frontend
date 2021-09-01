import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 90vh;
  flex: 1;
  padding: 30px 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 400px) {
    padding: 30px 30px;
    min-height: 70vh;
  }
  @media (min-width: 401px) and (max-width: 700px) {
    padding: 30px 50px;
    min-height: 70vh;
  }

  @media (min-width: 701px) and (max-width: 1000px) {
    padding: 30px 60px;
    min-height: 70vh;
  }
`
export default function DashboardHome () {
  return (
    <Wrapper>
      <h1>Dashboard</h1>
    </Wrapper>
  )
}
