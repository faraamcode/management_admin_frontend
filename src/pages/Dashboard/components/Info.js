import React from 'react'
import styled from 'styled-components'
import { DarkShadow, LightShadow } from '../../../common/Global.Style'
import { ButtonStyle } from '../../../components/Button'
export default function Info ({ setOpenModal }) {
  return (
    <Wrapper>
      <div>
        <img src='https://res.cloudinary.com/faraamit/image/upload/v1630948112/design/pexels-olia-danilevich-5088184_fp8urk.jpg' />
      </div>
      <div>
        <h4>Title</h4>
        <p>lorem ipsum</p>
      </div>
      <div>
        <ButtonStyle onClick={() => setOpenModal(true)}>Edit</ButtonStyle>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  min-height: 200px;
  width: 100%;
  margin: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  div {
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 300px;
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
