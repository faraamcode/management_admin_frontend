import React from 'react'
import styled from 'styled-components'
import { MainButton } from '../../Button'

const LinksList = styled.ul`
  width: 60%;
  display: flex;
  justify-content: space-between;
`
export default function HomeNavLinks () {
  return (
    <div>
      <LinksList>
        <li>Student Portal</li>
        <li>Staff Portal</li>
      </LinksList>
      <MainButton title='Register your child' />
    </div>
  )
}
