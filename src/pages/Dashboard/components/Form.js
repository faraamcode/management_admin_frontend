import React, { useState } from 'react'
import styled from 'styled-components'
import { ButtonStyle } from '../../../components/Button'
import Modal from './Modal'
import { Input, SelectStyle } from './Input'
import { useDispatch, useSelector } from 'react-redux'
import {
  clearAbout,
  createAbout,
  fetchAbout,
  updateAbout
} from '../../../redux/Actions/AboutActionCreator'
import { useAuthContext } from '../../../services/auth.service'
import { InputError } from '../../../common/Global.Style'
import { useModalContext } from '../../../context/modal.context'

export default function Form () {
  const dispatch = useDispatch()
  const { token } = useAuthContext()
  const { closeModal, edit, setEdit } = useModalContext()
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
    if (edit) {
      dispatch(updateAbout(token, edit, allValues))
    } else {
      dispatch(createAbout(token, allValues))
    }
  }
  const {
    validateError,
    createSuccess,
    createError,
    createLoading,
    editLoading,
    editSuccess,
    editError
  } = useSelector(state => state.About)

  const values = useSelector(state => state.About.about)

  const setEditForm = React.useCallback(id => {
    if (values) {
      const EditData = values.find(item => item.id == id)

      setPreview(EditData['image_url'])

      setFormData({
        about_info: EditData['about_info'],
        about_title: EditData['about_title'],
        about_category: EditData['about_category']
      })
    }
  })

  React.useEffect(() => {
    if (createSuccess) {
      closeModal()
      dispatch(clearAbout())
      dispatch(fetchAbout(token))
    }
  }, [createSuccess])
  React.useEffect(() => {
    if (editSuccess) {
      closeModal()
      setEdit(null)
      dispatch(clearAbout())
      dispatch(fetchAbout(token))
    }
  }, [editSuccess])

  React.useEffect(() => {
    if (edit) {
      console.log('am rerendering', edit)
      setEditForm(edit)
    }
  }, [edit])

  return (
    <Modal>
      <Wrapper>
        <h4>Form Title</h4>
        <div>
          <img src={preview} alt={preview} />
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
            {edit && (
              <option value={formData['about_category']}>
                {formData['about_category']}
              </option>
            )}
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
            {!createSuccess &&
            !editError &&
            !editLoading &&
            !editSuccess &&
            !createLoading &&
            !createError &&
            !edit
              ? 'save'
              : null}
            {createLoading ? 'saving' : null}
            {editLoading ? 'updating' : null}
            {createError || editError ? 'failed' : null}
            {edit ? 'update' : null}
            {createSuccess ? 'Successfully created' : null}
            {editSuccess ? 'Edited Successfully ' : null}
          </ButtonStyle>
        </span>
      </Wrapper>
    </Modal>
  )
}

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
