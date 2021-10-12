import userImage from '../../../assets/images/chairman.JPG'
import React from 'react'
import styled from 'styled-components'
import { Grey } from '../../../utils/color'
import { StyleLink } from '../../../components/Button'

const Profile = () => {
  return (
    <Wrapper>
      <div>
        <span>Email : abdulrasaqalagbede</span>
        <span>Gender : male</span>
      </div>
      {/* <div>
        <span> : abdulrasaqalagbede</span>
        <span>Email : abdulrasaqalagbede</span>
      </div> */}
      <EditLink to='/dashboard'>Edit profile</EditLink>
    </Wrapper>
  )
}

export default Profile

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  justify-content: center;
  flex-direction: column;
  background: transparent;
  padding: 0 3rem;
  div {
    border-bottom: 1px solid black;
    padding: 1rem 0;
  }
  span: nth-child(2) {
    padding-left: 2rem;
  }
`
const EditLink = styled(StyleLink)`
  margin-top: 1rem;
  margin-left: 0;
  align-self: start;
`
