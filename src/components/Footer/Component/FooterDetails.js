import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ContainerStyled = styled.div`
  align-self: start;
  max-width: 400px;
  width: 350px;
  h5 {
    font-size: 20px;
    color: white;
    text-transform: upper-case;
    margin: 20px 0;
  }
  div {
    display: flex;
    flex-direction: column;
  }
`

const LinkStyle = styled(Link)`
  padding: 5px 0;
  margin-left: 0px;
  text-decoration: none;
  color: white;
  &:hover {
    cursor: pointer;
  }
`
export default function FooterDetails () {
  return (
    <ContainerStyled>
      <h5>Title of Footer</h5>
      <div>
        <LinkStyle to='/'>Portal</LinkStyle>
        <LinkStyle to='/'>Portal</LinkStyle>
        <LinkStyle to='/'>Portal</LinkStyle>
        <LinkStyle to='/'>Portal</LinkStyle>
      </div>
    </ContainerStyled>
  )
}
