import React from 'react'
import styled from 'styled-components'
import { InputError } from '../../../common/Global.Style'
export const Input = ({
  type = 'text',
  name,
  placeholder,
  value,
  handleChange
}) => {
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

export const FormSelect = ({
  placeholder,
  name,
  validateError,
  handleChangeData,
  formData,
  options,
  edit
}) => {
  return (
    <>
      <SelectStyle name={name} required onChange={handleChangeData}>
        {edit && <option value={formData[name]}>{formData[name]}</option>}
        <option value=''>Select Gender</option>
        {options.map(item => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </SelectStyle>
      {validateError?.[name] && (
        <InputError>{validateError?.[name]}</InputError>
      )}
    </>
  )
}
export const FormInput = ({
  placeholder,
  type,
  name,
  validateError,
  handleChangeData,
  formData
}) => {
  return (
    <>
      <Input
        type={type}
        placeholder={placeholder}
        name={name}
        value={formData[name]}
        handleChange={handleChangeData}
      />
      {validateError?.[name] && (
        <InputError>{validateError?.[name]}</InputError>
      )}
    </>
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
