import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ButtonStyle = styled.button`
  background-color: #e36414;
  color: #fff;
  padding: 10px 30px;
  border-radius: 6px;
  border: 0;
  cursor: pointer;
  @media screen and (max-width: 650px) {
    display: none;
  }
`
export const MainButton = ({ title }) => {
  return <ButtonStyle>{title}</ButtonStyle>
}

export const StyleLink = styled(Link)`
  margin-left: 15px;
  text-decoration: none;
  color: black;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`
