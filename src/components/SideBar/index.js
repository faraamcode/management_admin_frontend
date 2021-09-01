import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { IoIosArrowDown } from 'react-icons/io'
import { FaAddressBook } from 'react-icons/fa'
import { Transition } from '../../common/Global.Style'
import { Dark, White } from '../../utils/color'
const Wrapper = styled.div`
  //   margin-top: 10px;
  width: 300px;
  height: 90vh;
  background: ${White};
  //   opacity: 0.;
  //   box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.6);
  transition: all 0.8s ease-in-out;
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
  display: flex;
  flex-direction: column;
`

const MenuItemStyle = styled.li`
  list-style: none;
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
  }
`

const MenuItem = () => {
  return (
    <MenuItemStyle>
      <Link to='/'>
        <span>
          <FaAddressBook />
          Dashboard
        </span>
        <IoIosArrowDown />
      </Link>
    </MenuItemStyle>
  )
}

function SideBar () {
  const [click, setClick] = useState(true)
  return (
    <Wrapper click={click} onClick={() => setClick(!click)}>
      <MenuContainerStyle>
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </MenuContainerStyle>
    </Wrapper>
  )
}

export default SideBar
