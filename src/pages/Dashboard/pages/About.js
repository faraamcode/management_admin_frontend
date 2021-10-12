import React, { useState } from 'react'
import styled from 'styled-components'
import Form from '../components/Form'
import Info from '../components/Info'
import Modal from '../components/Modal'
import Succesful from '../components/Succesful'
import { Wrapper } from '../components/main.style'

export default function About () {
  const [openModal, setOpenModal] = useState(false)
  return (
    <>
      <Wrapper>
        <Info setOpenModal={setOpenModal} />
      </Wrapper>
      {openModal && <Form />}
    </>
  )
}
