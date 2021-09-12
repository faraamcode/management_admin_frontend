import React, { useState } from 'react'
import styled from 'styled-components'
import Form from './components/Form'
import Info from './components/Info'
import Modal from './components/Modal'
import Succesful from './components/Succesful'

const Wrapper = styled.div`
  height: calc(100vh - 70px);
  margin-top: 70px;
  flex: 1;
  padding: 30px 80px;
  display: flex;
  overflow: auto;
  flex-direction: column;
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
  const [openModal, setOpenModal] = useState(false)
  return (
    <>
      <Wrapper>
        <Info setOpenModal={setOpenModal} />
        <Info />
        <Info />
        <Info />
        <Info />
        <Info />
        <Info />
        <Info />
        <Info />
        <Info />
        <Info />
      </Wrapper>
      {/* <Form /> */}
    </>
  )
}
