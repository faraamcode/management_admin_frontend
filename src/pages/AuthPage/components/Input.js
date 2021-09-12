import { CheckBoxWrapper, InputStyle } from '../login-style'
const Input = ({ type, icon, placeholder, name, label }) => {
  if (type == 'checkbox') {
    return (
      <CheckBoxWrapper>
        <input type={type} />
        <label>{label}</label>
      </CheckBoxWrapper>
    )
  }

  return (
    <InputStyle>
      {icon}
      <input type={type} placeholder={placeholder} name={name} />
    </InputStyle>
  )
}

export default Input
