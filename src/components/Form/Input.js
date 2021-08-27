import React from 'react'
import styled from 'styled-components'

export const InputStyle = styled.input`
  width: ${({ width }) => (width ? width : '100%')};
  height: ${({ height }) => (height ? height : '50px')};
  padding: 5px;
  font-size: 15px;
  margin: 10px 0;
`
export const Input = ({ name, placeholder }) => {
  return (
    <InputStyle type='text' placeholder={placeholder} name={name}></InputStyle>
  )
}
