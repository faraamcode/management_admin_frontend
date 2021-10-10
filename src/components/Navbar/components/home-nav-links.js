import React from 'react'
import { useAuthContext } from '../../../services/auth.service'
import { MainButton } from '../../Button'
import { useSelector } from 'react-redux'
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
  const profileInfo = useSelector(state => state.Profile?.profile)
  return (
    <LinksList>
      <LinkItem>
        <Links to='/'>
          <UserIcon />
          <span>{profileInfo ? profileInfo.user_email : ''}</span>
        </Links>
      </LinkItem>
      {/* <MainButton title='Login' /> */}
    </LinksList>
  )
}
export default function HomeNavLinks () {
  const { token } = useAuthContext()

  return (
    <>
      {!token ? <HomeNavLink /> : <UserProfile />}

      <ToggleIcon />
    </>
  )
}
