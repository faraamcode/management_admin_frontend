import React from 'react'
import styled from 'styled-components'
import { DarkShadow, LightShadow } from '../../../common/Global.Style'
import { ButtonStyle } from '../../../components/Button'
import Modal from './Modal'
export default function Info ({ setOpenModal, image, text, title }) {
  return (
    <>
      <Wrapper>
        <div>
          <img src={image} />
        </div>
        <div>
          <h4>{title}</h4>
          <p>{text}</p>
        </div>
        <div>
          <ButtonStyle background='blue' onClick={() => setOpenModal(true)}>
            Edit
          </ButtonStyle>
          <ButtonStyle onClick={() => setOpenModal(true)}>Delete</ButtonStyle>
        </div>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  min-height: 200px;
  max-height: 400px;
  width: 100%;
  margin: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  div {
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 300px;
  }
  div: nth-child(3){
    flex-direction: row;
    button{
      margin-left: 10px;
    }
  }
  img {
    // border: 1px solid rgba(0, 0, 0, 0.5);
    box-shadow: ${LightShadow}
    width: 90%;
    height: 90%;
  }
  h4,
  p {
    margin: 0;
  }
  button {
    justify-self: start;
    align-self: end;
  }
`
