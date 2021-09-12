import React from 'react'
import { MdEmail, MdVpnKey } from 'react-icons/md'
import {
  Wrapper,
  Container,
  ImageContainer,
  FormContainer,
  FormTitle,
  InputStye,
  CheckBoxWrapper
} from './login-style'
import LoginImage from '../../assets/images/login.jpg'
import { ButtonStyle, StyleLink } from '../../components/Button'

const Login = () => {
  return (
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
          <CheckBox />
          <ButtonStyle>Login</ButtonStyle>
          <p>
            I don't have an account.<StyleLink>click to signup</StyleLink>
          </p>
        </FormContainer>
      </Container>
    </Wrapper>
  )
}

export default Login

const Input = ({ type, icon, placeholder, name }) => {
  return (
    <InputStye>
      {icon}
      <input type={type} placeholder={placeholder} name={name} />
    </InputStye>
  )
}

const CheckBox = () => {
  return (
    <CheckBoxWrapper>
      <input type='checkbox' />
      <label> Remember me</label>
    </CheckBoxWrapper>
  )
}
