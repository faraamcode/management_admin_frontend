import React from 'react'
import { MainButton } from '../../Button'
import { LinkItem, LinksList, Links, ToggleIcon } from './home-nav-element'

// justify-content: space-between;

export default function HomeNavLinks () {
  return (
    <>
      <LinksList>
        <LinkItem>
          <Links to='/'>Student Portal</Links>
        </LinkItem>
        <LinkItem>
          <Links to='/'>Staff Portal</Links>
        </LinkItem>
        <LinkItem>
          <Links to='/'>Staff Portal</Links>
        </LinkItem>
        <LinkItem>
          <Links to='/'>Staff Portal</Links>
        </LinkItem>
        <LinkItem>
          <Links to='/'>Staff Portal</Links>
        </LinkItem>
        <LinkItem>
          <Links to='/'>Staff Portal</Links>
        </LinkItem>
        <LinkItem>
          <Links to='/'>Staff Portal</Links>
        </LinkItem>
        <LinkItem>
          <Links to='/'>Staff Portal</Links>
        </LinkItem>
        <MainButton title='Register' />
      </LinksList>
      <ToggleIcon />
    </>
  )
}
