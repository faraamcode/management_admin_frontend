import React from 'react'
import { MainButton } from '../../Button'
import {
  LinkItem,
  LinksList,
  Links,
  ToggleIcon,
  UserIcon
} from './home-nav-element'

// justify-content: space-between;

const HomeNavLink = () => {
  return (
    <LinksList>
      <LinkItem>
        <Links to='/'>About us</Links>
      </LinkItem>
      <LinkItem>
        <Links to='/'>Contact us</Links>
      </LinkItem>
      <LinkItem>
        <Links to='/'>Admission</Links>
      </LinkItem>
      <LinkItem>
        <Links to='/'>School calendar</Links>
      </LinkItem>
      <LinkItem>
        <Links to='/'>School Portal</Links>
      </LinkItem>
      <MainButton title='Register' />
    </LinksList>
  )
}

const UserProfile = () => {
  return (
    <LinksList>
      <LinkItem>
        <Links to='/'>
          <UserIcon />
          <span>Adebisi</span>
        </Links>
      </LinkItem>
      {/* <MainButton title='Login' /> */}
    </LinksList>
  )
}
export default function HomeNavLinks () {
  return (
    <>
      <HomeNavLink />
      {/* <UserProfile /> */}
      <ToggleIcon />
    </>
  )
}
