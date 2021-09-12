import React from 'react'
import Modal from './Modal'
import MarkImage from '../../../assets/images/mark.jpg'
import styled from 'styled-components'
import { GiCheckMark, GiCancel } from 'react-icons/gi'
import { ButtonStyle } from '../../../components/Button'

export default function Succesful ({}) {
  return (
    <Modal>
      <Wrapper>
        {/* <div>
          <GiCheckMark />
        </div> */}
        <GiCancel />
        <h3>Updated Successfully</h3>
        <ButtonStyle>Ok</ButtonStyle>
      </Wrapper>
    </Modal>
  )
}

const Wrapper = styled.div`
  min-width: 250px;
  min-height: 250px;
  background: #dfe5e7;
  align-self: center;
  margin: 0 auto;
  border-radius: 7px;
  padding: 40px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  svg {
    width: 100px;
    height: 100px;
  }
  h3 {
    text-align: center;

    text-transform: uppercase;
  }
  //   img {
  //     border: 4px solid black;
  //     margin-bottom: 10px;
  //   }
  div {
    display: flex;

    width: 150px;
    height: 150px;
    border: 5px solid black;
    align-items: center;
    justify-content: center;
  }
`
