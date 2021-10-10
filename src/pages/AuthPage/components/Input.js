import { CheckBoxWrapper, InputStyle } from '../login-style'
const Input = ({
  type,
  icon,
  value,
  handleChange,
  placeholder,
  name,
  label,
  required
}) => {
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
      <input
        value={value}
        onChange={handleChange}
        type={type}
        placeholder={placeholder}
        name={name}
        required={required}
      />
    </InputStyle>
  )
}

export default Input
