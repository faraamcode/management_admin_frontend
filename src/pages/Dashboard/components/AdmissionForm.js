import React, { useState } from 'react'
import styled from 'styled-components'
import { ButtonStyle } from '../../../components/Button'
import Modal from './Modal'
import { AdmissionField, AdmissionSelectField } from '../../../utils/data'
import { useDispatch, useSelector } from 'react-redux'
import { Input, SelectStyle, FormSelect, FormInput } from './Input'
import { useAuthContext } from '../../../services/auth.service'
import { InputError } from '../../../common/Global.Style'
import { useModalContext } from '../../../context/modal.context'
import {
  createAdmission,
  updateAdmission,
  fetchAdmission,
  clearAdmission
} from '../../../redux/Actions/AdmissionActionCreator'

export default function AdmissionForm () {
  const dispatch = useDispatch()
  const { token } = useAuthContext()
  const { closeModal, edit, setEdit } = useModalContext()
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
    if (edit) {
      dispatch(updateAdmission(token, edit, allValues))
    } else {
      dispatch(createAdmission(token, allValues))
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
  } = useSelector(state => state.Admission)

  const values = useSelector(state => state.Admission.admission)

  const setEditForm = React.useCallback(id => {
    if (values) {
      const EditData = values.find(item => item.id == id)

      setPreview(EditData['image_url'])

      setFormData({ ...EditData })
    }
  })

  React.useEffect(() => {
    if (createSuccess) {
      closeModal()
      dispatch(clearAdmission())
      dispatch(fetchAdmission(token))
    }
  }, [createSuccess])

  React.useEffect(() => {
    if (editSuccess) {
      closeModal()
      setEdit(null)
      dispatch(clearAdmission())
      dispatch(fetchAdmission(token))
    }
  }, [editSuccess])

  React.useEffect(() => {
    if (edit) {
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
            name='student_gender'
            required
            onChange={handleChangeData}
          >
            {edit && (
              <option value={formData['student_gender']}>
                {formData['student_gender']}
              </option>
            )}
            <option value=''>Select Gender</option>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
          </SelectStyle>
          {validateError?.['student_gender'] && (
            <InputError>{validateError?.['student_gender']}</InputError>
          )}
        </div>
        <span>
          {AdmissionField.map(item => (
            <FormInput
              key={item.name}
              type={item.type}
              placeholder={item.placeholder}
              name={item.name}
              formData={formData}
              handleChangeData={handleChangeData}
              validateError={validateError}
            />
          ))}
          {AdmissionSelectField.map(item => (
            <FormSelect
              name={item.name}
              formData={formData}
              handleChangeData={handleChangeData}
              validateError={validateError}
              options={item.options}
              edit={edit}
            />
          ))}
        </span>

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
      </Wrapper>
    </Modal>
  )
}

const Wrapper = styled.div`
  min-width: 300px;
  min-height: 500px;
  background: white;
  align-self: center;
  margin: 0 auto;
  border-radius: 7px;
  padding: 40px 20px;
  span {
    display: grid;
    column-gap: 1rem;
    grid-template-columns: 1fr 1fr;
  }
  h4 {
    text-align: center;
    text-transform: uppercase;
  }
  img {
    border: 4px solid black;
    margin-bottom: 10px;
    width: 80px;
    height: 80px;

    max-height: 300px;
  }
  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-height: 400px;
  }
`
