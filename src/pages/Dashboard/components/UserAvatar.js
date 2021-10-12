import userImage from '../../../assets/images/chairman.JPG'
import React from 'react'
import styled from 'styled-components'

const UserAvatar = ({ image = userImage, name = 'profile' }) => {
  return (
    <Wrapper>
      <div>
        <img src={image} alt={name} />
      </div>
      <span>
        <h4>IBRAHIM ABDULRASAQ</h4>
        <p>user</p>

        <h5>Welcome to Content Management Dashboard</h5>
        <h6>giving you the best experience</h6>
      </span>
    </Wrapper>
  )
}

export default UserAvatar

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  background: transparent;
  padding: 0 3rem;
  div {
    height: 200px;
    width: 200px;
    border-radius: 50%;
    overflow: hidden;
  }
  img {
    height: 100%;
    width: 100%;
  }
  span {
    align-self: center;
    padding-left: 20px;
  }
  p,
  h5,
  h6,
  h4 {
    margin: 0;
  }
  h5 {
    margin-top: 10px;
  }
  h6,
  p {
    font-weight: 100;
    text-align: left;
    padding: 0 !important;
  }
`
