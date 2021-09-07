import React from 'react'
import styled from 'styled-components'
import { ButtonStyle } from '../../../components/Button'

const Input = ({ type = 'text', name, placeholder, value }) => {
  if (type == 'file') {
    return <input type={type} name={name} value={value} />
  }
  if (type == 'textarea') {
    return <TextAreaStyle type={type} name={name} value={value}></TextAreaStyle>
  }
  return (
    <InputStyle
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
    ></InputStyle>
  )
}
export default function Form () {
  return (
    <Wrapper>
      <h4>Form Title</h4>
      <div>
        <img src='https://res.cloudinary.com/faraamit/image/upload/v1630948112/design/pexels-olia-danilevich-5088184_fp8urk.jpg' />
        <Input type='file' name='image' />
      </div>
      <Input type='text' placeholder='enter your title' />
      <Input type='textarea' placeholder='enter your title' />
      <ButtonStyle>Save</ButtonStyle>
    </Wrapper>
  )
}

export const InputStyle = styled.input`
  width: ${({ width }) => (width ? width : '100%')};
  height: ${({ height }) => (height ? height : '50px')};
  padding: 5px;
  font-size: 15px;
  margin: 10px 0;
`
export const TextAreaStyle = styled.textarea`
  width: ${({ width }) => (width ? width : '100%')};
  height: ${({ height }) => (height ? height : '50px')};
  padding: 5px;
  font-size: 15px;
  margin: 10px 0;
`
const Wrapper = styled.div`
  min-width: 250px;
  min-height: 500px;
  background: white;
  align-self: center;
  margin: 0 auto;
  border-radius: 7px;
  padding: 40px 20px;
  h4 {
    text-align: center;
    text-transform: uppercase;
  }
  img {
    border: 4px solid black;
    margin-bottom: 10px;
  }
  div {
    display: flex;
    flex-direction: column;
    width: 250px;
  }
`
