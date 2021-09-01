import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Wrapper } from '../../../common/Global.Style'
import { RiCopyrightLine } from 'react-icons/ri'

const BaseWrapper = styled(Wrapper)`
  background: black;
  opacity: 0.9;
  min-height: 100px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`
const Container = styled.div`
  display: flex;
  color: white;
  span {
    margin-left: 15px;
  }
`
const LinkStyle = styled(Link)`
  margin-right: 5px;
  text-decoration: none;
  color: white;
`
export default function FooterBase () {
  return (
    <BaseWrapper>
      <Container>
        <RiCopyrightLine />
        <span>Lorem inst hahhjrerre hshh</span>
      </Container>
      <Container>
        <LinkStyle to='/'>Privacy</LinkStyle>
        <LinkStyle to='/'>Terms</LinkStyle>
        <LinkStyle to='/'>Condition</LinkStyle>
      </Container>
    </BaseWrapper>
  )
}
