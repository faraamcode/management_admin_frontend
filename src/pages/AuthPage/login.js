import React from 'react'
import { MdEmail, MdVpnKey } from 'react-icons/md'
import Input from './components/Input'
import {
  Wrapper,
  Container,
  ImageContainer,
  FormContainer,
  FormTitle
} from './login-style'
import LoginImage from '../../assets/images/login.jpg'
import { ButtonStyle, StyleLink } from '../../components/Button'
import Modal from '../Dashboard/components/Modal'
import styled from 'styled-components'
const Login = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <ImageContainer>
            <img src={LoginImage} alt='login' />
          </ImageContainer>
          <FormContainer>
            <FormTitle>Sign in</FormTitle>
            <h6>login to manage your account. </h6>
            <Input
              name='email'
              placeholder='enter your email'
              icon={<MdEmail />}
              type='text'
            />
            <Input
              name='password'
              placeholder='enter your password'
              icon={<MdVpnKey />}
              type='password'
            />
            <Input type='checkbox' label='remember me' />
            <ButtonStyle>Login</ButtonStyle>
            <p>
              I don't have an account.<StyleLink>click to signup</StyleLink>
            </p>
          </FormContainer>
        </Container>
        <ChangePassword />
      </Wrapper>
    </>
  )
}

const ChangePassword = () => {
  return (
    <Modal>
      <ChangePasswordWrapper>
        <h4>Enter your email </h4>
        <Input
          name='email'
          placeholder='enter your email'
          icon={<MdEmail />}
          type='text'
        />
        <ButtonStyle>send mail</ButtonStyle>
      </ChangePasswordWrapper>
    </Modal>
  )
}

const ChangePasswordWrapper = styled.div`
  align-self: center;
  justify-self: center;
  width: 400px;
  // height: 100px;
  background: white;
  padding: 10px 20px;
  border-radius: 10px;
  margin: 0 auto;
`
export default Login
