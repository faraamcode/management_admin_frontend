import React from 'react'
import { MainButton } from '../../Button'
import { LinkItem, LinksList, Links, ToggleIcon } from './home-nav-element'

// justify-content: space-between;

export default function HomeNavLinks () {
  return (
    <>
      <LinksList>
        <LinkItem>
          <Links to='/'>About us</Links>
        </LinkItem>
        <LinkItem>
          <Links to='/'>Contact us</Links>
        </LinkItem>
        <LinkItem>
          <Links to='/'>School calendar</Links>
        </LinkItem>
        <LinkItem>
          <Links to='/'>School Portal</Links>
        </LinkItem>
        <MainButton title='Register' />
      </LinksList>
      <ToggleIcon />
    </>
  )
}
