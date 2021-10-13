import React, { useState } from 'react'
import styled from 'styled-components'
import { ButtonStyle } from '../../../components/Button'
import Modal from './Modal'
import { useDispatch, useSelector } from 'react-redux'
import {
  clearAbout,
  createAbout,
  fetchAbout
} from '../../../redux/Actions/AboutActionCreator'
import { useAuthContext } from '../../../services/auth.service'
import { InputError } from '../../../common/Global.Style'
import { useModalContext } from '../../../context/modal.context'
const Input = ({ type = 'text', name, placeholder, value, handleChange }) => {
  if (type == 'file') {
    return (
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        required
      />
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
        required
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
      required
    ></InputStyle>
  )
}

export default function Form () {
  const dispatch = useDispatch()
  const { token } = useAuthContext()
  const { closeModal } = useModalContext()
  const [preview, setPreview] = useState(
    'https://res.cloudinary.com/faraamit/image/upload/v1630948112/design/pexels-olia-danilevich-5088184_fp8urk.jpg'
  )
  const [formData, setFormData] = useState({
    about_info: '',
    about_title: '',
    about_category: ''
  })

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
    dispatch(createAbout(token, allValues))
  }
  const {
    validateError,
    createSuccess,
    createError,
    createLoading
  } = useSelector(state => state.About)
  React.useEffect(() => {
    if (createSuccess) {
      closeModal()
      dispatch(clearAbout())
      dispatch(fetchAbout(token))
    }
  }, [createSuccess])
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
          <SelectStyle
            name='about_category'
            required
            onChange={handleChangeData}
          >
            <option value=''>Select Category</option>
            <option value='About'>About</option>
            <option value='Mission'>Mission</option>
            <option value='Vision'>Vision</option>
          </SelectStyle>
          {validateError?.['about_category'] && (
            <InputError>{validateError?.['about_category']}</InputError>
          )}
        </div>
        <span>
          <Input
            type='text'
            placeholder='enter your title'
            name='about_title'
            value={formData['about_title']}
            handleChange={handleChangeData}
          />
          {validateError?.['about_title'] && (
            <InputError>{validateError?.['about_title']}</InputError>
          )}
          <Input
            type='textarea'
            placeholder='enter your title'
            name='about_info'
            value={formData['about_info']}
            handleChange={handleChangeData}
          />
          {validateError?.['about_info'] && (
            <InputError>{validateError?.['about_info']}</InputError>
          )}

          <ButtonStyle onClick={handleSubmit}>
            {!createSuccess && !createLoading && !createError ? 'save' : null}
            {createLoading ? 'saving' : null}
            {createError ? 'failed' : null}
            {createSuccess ? 'Successfully created' : null}
          </ButtonStyle>
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
export const SelectStyle = styled.select`
  width: 100%;
  height: 40px;
  margin-top: 20px;
  padding: 10px;
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
