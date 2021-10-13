import React, { useState } from 'react'
import styled from 'styled-components'
import { ButtonStyle } from '../../../components/Button'
import Modal from './Modal'
const Input = ({ type = 'text', name, placeholder, value, handleChange }) => {
  if (type == 'file') {
    return (
      <input type={type} name={name} value={value} onChange={handleChange} />
    )
  }
  if (type == 'textarea') {
    return (
      <TextAreaStyle
        type={type}
        name={name}
        value={value}
        placeholder=' type your info'
        onChange={handleChange}
      ></TextAreaStyle>
    )
  }
  return (
    <InputStyle
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    ></InputStyle>
  )
}

export default function Form () {
  const [preview, setPreview] = useState(
    'https://res.cloudinary.com/faraamit/image/upload/v1630948112/design/pexels-olia-danilevich-5088184_fp8urk.jpg'
  )
  const [formData, setFormData] = useState({})

  const previewFile = file => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setPreview(reader.result)
    }
  }

  const handleFileInputChange = e => {
    const file = e.target.files[0]
    previewFile(file)
  }
  const handleChangeData = e => {
    const name = e.target.name
    const value = e.target.value
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }
  const handleSubmit = () => {
    const allValues = { ...formData, image_url: preview }
    console.log(allValues)
  }
  return (
    <Modal>
      <Wrapper>
        <h4>Form Title</h4>
        <div>
          <img src={preview} />
          <Input
            type='file'
            name='image'
            handleChange={handleFileInputChange}
          />
        </div>
        <span>
          <Input
            type='text'
            placeholder='enter your title'
            name='about_title'
            value={formData['about_title']}
            handleChange={handleChangeData}
          />
          <Input
            type='textarea'
            placeholder='enter your title'
            name='about_info'
            value={formData['about_info']}
            handleChange={handleChangeData}
          />
          <ButtonStyle onClick={handleSubmit}>Save</ButtonStyle>
        </span>
      </Wrapper>
    </Modal>
  )
}

export const InputStyle = styled.input`
  width: ${({ width }) => (width ? width : '100%')};
  height: ${({ height }) => (height ? height : '50px')};
  padding: 5px;
  font-size: 15px;
  margin: 10px 0;
`
export const TextAreaStyle = styled.textarea`
  width: ${({ width }) => (width ? width : '100%')};
  height: ${({ height }) => (height ? height : '50px')};
  padding: 5px;
  font-size: 15px;
  margin: 10px 0;
`
const Wrapper = styled.div`
  min-width: 250px;
  min-height: 500px;
  background: white;
  align-self: center;
  margin: 0 auto;
  border-radius: 7px;
  padding: 40px 20px;
  span {
    display: flex;
    flex-direction: column;
  }
  h4 {
    text-align: center;
    text-transform: uppercase;
  }
  img {
    border: 4px solid black;
    margin-bottom: 10px;
    width: 100%;
    max-height: 300px;
  }
  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-height: 400px;
  }
`
