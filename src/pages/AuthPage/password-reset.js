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
import PasswordImage from '../../assets/images/forget_password.jpg'
import { ButtonStyle, StyleLink } from '../../components/Button'

const PasswordReset = () => {
  return (
    <Wrapper>
      <Container>
        <ImageContainer>
          <img src={PasswordImage} alt='login' />
        </ImageContainer>
        <FormContainer>
          <FormTitle>Password Reset</FormTitle>
          <h6>Enter your password correctly </h6>
          <Input
            name='password'
            placeholder='enter your password'
            icon={<MdVpnKey />}
            type='password'
          />
          <Input
            name='password'
            placeholder='confirm your password'
            icon={<MdVpnKey />}
            type='password'
          />
          <Input type='checkbox' label='remember me' />
          <ButtonStyle>Reset password</ButtonStyle>
        </FormContainer>
      </Container>
    </Wrapper>
  )
}

export default PasswordReset
