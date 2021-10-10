import React, { useState, useCallback, useMemo } from 'react'
import { useHistory } from 'react-router'
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
import { loginUser } from '../../redux/Actions/AuthActionsCreator'
import { useDispatch, useSelector } from 'react-redux'
import Succesful from '../Dashboard/components/Succesful'
import { InputError } from '../../common/Global.Style'
import { useAuthContext } from '../../services/auth.service'
const Login = () => {
  const history = useHistory()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const { setToken, token } = useAuthContext()
  const loginState = useSelector(state => state?.Authentication)
  console.log('hiii')
  const dispatch = useDispatch()

  const handleChangeValue = useCallback(e => {
    return setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  })

  // if (loginState.success) {
  //   // history.replace('/dashboard')
  // }
  React.useEffect(() => {
    if (token) {
      history.replace('/dashboard')
    }
  }, [token])

  React.useEffect(() => {
    if (loginState.success) {
      setToken({ token: loginState.token, expires: 800 })
    }
  }, [loginState.success])
  return (
    <>
      <Wrapper>
        <Container>
          <ImageContainer>
            <img src={LoginImage} alt='login' />
          </ImageContainer>
          <FormContainer
            onSubmit={e => {
              e.preventDefault()
              dispatch(loginUser(formData))
            }}
          >
            <FormTitle>Sign in</FormTitle>
            <h6>login to manage your account. </h6>
            <Input
              name='email'
              value={formData.email}
              handleChange={handleChangeValue}
              placeholder='enter your email'
              icon={<MdEmail />}
              required={true}
              type='text'
            />
            {loginState.validationError?.['user_email'] && (
              <InputError>
                {loginState.validationError['user_email']}
              </InputError>
            )}
            <Input
              value={formData.password}
              handleChange={handleChangeValue}
              name='password'
              placeholder='enter your password'
              icon={<MdVpnKey />}
              type='password'
              required={true}
            />
            {loginState.validationError?.['user_password'] && (
              <InputError>
                {loginState.validationError['user_password']}
              </InputError>
            )}
            <Input type='checkbox' label='remember me' />
            <ButtonStyle type='submit'>
              {loginState.loading ? 'login in...' : 'login'}
            </ButtonStyle>
            <p>
              I don't have an account.<StyleLink>click to signup</StyleLink>
            </p>
          </FormContainer>
        </Container>
        {loginState.error && (
          <Succesful type='error' message={loginState.error} />
        )}
        {loginState.success && <Succesful message='Login Success' />}
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
