import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { GoThreeBars } from 'react-icons/go'

export const LinksList = styled.ul`
  display: flex;
  max-width: 50%;
  min-width: 400px;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  margin-right: 30px;

  @media screen and (max-width: 650px) {
    display: none;
  }
`
export const LinkItem = styled.li`
  color: red;
`

export const Links = styled(Link)`
  margin-left: 15px;
  text-decoration: none;
  color: black;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
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
