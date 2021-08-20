import React from 'react'
import styled from 'styled-components'

const ButtonStyle = styled.button`
  background-color: #e36414;
  color: #fff;
  padding: 10px 30px;
  border-radius: 6px;
  border: 0;
`
export const MainButton = ({ title, to }) => {
  return <ButtonStyle>{title}</ButtonStyle>
}
