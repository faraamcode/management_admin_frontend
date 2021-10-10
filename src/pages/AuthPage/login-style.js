import styled from 'styled-components'
import { H1, H3 } from '../../common/Global.Style'
import { Dark } from '../../utils/color'

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
`

export const Container = styled.div`
  min-width: 300px;
  min-height: 80vh;
  display: flex;
  align-items: center;
  padding: 20px 30px;
`
export const FormContainer = styled.form`
  //   min-width: 300px;
  width: 600px;
  //   min-height: 300px;
  padding: 0 30px;
  height: 600px;

  h6 {
    margin: 0;
  }
`
export const ImageContainer = styled.div`
  min-width: 300px;
  width: 600px;
  min-height: 300px;
  height: 600px;
  display: none;
  @media screen and (min-width: 600px) {
    display: flex;
    align-item: center;
    justify-content: center;
  }
  img {
    width: 100%;
    height: 100%;
    // object-fit: cover;
  }
`

export const FormTitle = styled.h1`
  letter-spacing: 5px;
  margin: 0;
  font-size: 30px;
`

export const InputStyle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid black;
  padding: 10px 10px;
  svg {
    font-size: 40px;
  }
  input {
    border: 0;
    outline: none;
    font-size: 20px;
    padding: 0 10px;
    flex: 1;
  }
`

export const CheckBoxWrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
`
