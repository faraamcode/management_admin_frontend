import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { IoIosArrowDown } from 'react-icons/io'
import { FaAddressBook, FaRegNewspaper } from 'react-icons/fa'
import { MdEventAvailable, MdDomain } from 'react-icons/md'
import { FcAbout } from 'react-icons/fc'
import { Transition } from '../../common/Global.Style'
import { Dark, Grey, White } from '../../utils/color'
import { logRoles } from '@testing-library/react'
import {
  DASHBOARD_ABOUT_URL,
  DASHBOARD_ADMISSION_URL,
  DASHBOARD_CALENDAR_URL,
  DASHBOARD_CONTACT_URL,
  DASHBOARD_EVENTS_URL,
  DASHBOARD_GALLERY_URL,
  DASHBOARD_HERO_URL,
  DASHBOARD_MISSION_URL,
  DASHBOARD_NEWS_URL,
  DASHBOARD_STUDENTS_URL,
  DASHBOARD_URL,
  DASHBOARD_USER_URL
} from '../../common/route'
const Wrapper = styled.div`
  //   margin-top: 10px;
  width: 300px;
  height: calc(100vh - 70px);
  z-index: 5;
  background: ${White};
  border-top: 2px solid rgba(0, 0, 0, 0.05);
  border-right: 2px solid rgba(0, 0, 0, 0.05);
  //   opacity: 0.;
  //   box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.6);
  transition: all 0.8s ease-in-out;
  margin-top: 70px;
  @media screen and (max-width: 650px) {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    ${({ click }) =>
      click ? 'transform: translateX(0);' : 'translateX(-100%);'};
    ${({ click }) => (click ? 'display: flex;' : 'display: none;')}
  }
`
const MenuContainerStyle = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`

const MenuItemStyle = styled.li`
  list-style: none;
  width: 100%;
  a {
    display: flex;
    justify-content: space-between;
    justify-items: center;
    text-decoration: none;
    padding: 20px 10px;
    color: black;
  }
  span {
    display: flex;
  }
  svg {
    margin-right: 10px;
    color: black;
  }
  &:hover {
    pointer: cursor;
    background: rgba(0, 0, 0, 0.05);
  }
`

const MenuItem = ({ title, url, logo, subMenu }) => {
  return (
    <MenuItemStyle>
      <Link to={url}>
        <span>
          {logo}
          {title}
        </span>
        {subMenu && <IoIosArrowDown />}
      </Link>
    </MenuItemStyle>
  )
}

function SideBar () {
  const [click, setClick] = useState(true)
  return (
    <Wrapper click={click} onClick={() => setClick(!click)}>
      <MenuContainerStyle>
        <MenuItem
          title='Dashboard'
          url={DASHBOARD_URL}
          logo={<FaAddressBook />}
        />
        <MenuItem
          title='Hero Section'
          url={DASHBOARD_HERO_URL}
          logo={<MdDomain />}
        />
        <MenuItem
          title='About School'
          url={DASHBOARD_ABOUT_URL}
          logo={<FcAbout />}
        />
        <MenuItem
          title='School Events'
          url={DASHBOARD_EVENTS_URL}
          logo={<MdEventAvailable />}
        />
        <MenuItem
          title='CONTACTS'
          url={DASHBOARD_CONTACT_URL}
          logo={<FaRegNewspaper />}
        />
        <MenuItem
          title='Admission'
          url={DASHBOARD_ADMISSION_URL}
          logo={<FaRegNewspaper />}
        />
        <MenuItem
          title='Calendar'
          url={DASHBOARD_CALENDAR_URL}
          logo={<FaRegNewspaper />}
        />
        <MenuItem
          title='Gallery'
          url={DASHBOARD_GALLERY_URL}
          logo={<FaRegNewspaper />}
        />
        <MenuItem
          title='Mission'
          url={DASHBOARD_MISSION_URL}
          logo={<FaRegNewspaper />}
        />
        <MenuItem
          title='News'
          url={DASHBOARD_NEWS_URL}
          logo={<FaRegNewspaper />}
        />
        <MenuItem
          title='User'
          url={DASHBOARD_USER_URL}
          logo={<FaRegNewspaper />}
        />
        <MenuItem
          title='Student Perspectives'
          url={DASHBOARD_STUDENTS_URL}
          logo={<FaRegNewspaper />}
        />
        <MenuItem
          title='School News'
          url={DASHBOARD_NEWS_URL}
          logo={<FaRegNewspaper />}
        />
      </MenuContainerStyle>
    </Wrapper>
  )
}

export default SideBar
