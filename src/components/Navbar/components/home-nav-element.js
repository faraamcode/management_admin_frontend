import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { GoThreeBars } from 'react-icons/go'
import { FaUserCircle } from 'react-icons/fa'

export const LinksList = styled.ul`
  display: flex;
  align-items: center;
  min-width: 300px;
  max-width: 100%;
  list-style: none;
  @media screen and (max-width: 650px) {
    display: none;
  }
`
export const LinkItem = styled.li`
  color: red;
`

export const Links = styled(Link)`
  margin: 0 15px;
  text-decoration: none;
  color: black;
  display: flex;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  span {
    align-self: center;
    margin-left: 5px;
  }
`

export const ToggleIcon = styled(GoThreeBars)`
  font-size: 50px;
  @media screen and (min-width: 650px) {
    display: none;
  }
  &:hover {
    cursor: pointer;
  }
`
export const UserIcon = styled(FaUserCircle)`
  font-size: 40px;
`
