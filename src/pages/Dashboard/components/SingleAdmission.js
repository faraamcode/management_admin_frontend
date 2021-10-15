import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { DarkShadow, LightShadow } from '../../../common/Global.Style'
import { ButtonStyle } from '../../../components/Button'
import { useModalContext } from '../../../context/modal.context'
import {
  deleteAdmission,
  fetchAdmission
} from '../../../redux/Actions/AdmissionActionCreator'
import { useAuthContext } from '../../../services/auth.service'
import Modal from './Modal'
export default function SingleAdmission ({
  setOpenModal,
  image,
  id,
  surname,
  otherNames,
  proposedClass,
  time,
  index
}) {
  const dispatch = useDispatch()
  const { token } = useAuthContext()
  const { setEdit } = useModalContext()
  const profile = useSelector(state => state?.Profile.profile)
  const userRole = profile?.['user_role']
  const handleEdit = React.useCallback(id => {
    setOpenModal(true)
    setEdit(id)
  })

  const { deleteSuccess, deleteLoading, deleteError } = useSelector(
    state => state.Admission
  )
  React.useEffect(() => {
    dispatch(fetchAdmission(token))
  }, [deleteSuccess])

  const handleDelete = React.useCallback(id => {
    dispatch(deleteAdmission(token, id))
  })

  return (
    <>
      <tr>
        <td>{index}</td>
        <td>
          <img src={image} alt={image} />
        </td>
        <td>{surname}</td>
        <td>{otherNames}</td>
        <td>{proposedClass}</td>
        <td>{time}</td>
        <td>
          <ButtonStyle background='blue' onClick={() => handleEdit(id)}>
            Edit
          </ButtonStyle>
        </td>
        <td>
          {userRole === 'admin' && (
            <ButtonStyle onClick={() => handleDelete(id)}>
              {deleteLoading ? 'Deleting' : 'Delete'}
            </ButtonStyle>
          )}
        </td>
      </tr>
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  min-height: 200px;
  max-height: 400px;
  width: 100%;
  margin: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  div {
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 300px;
  }
  div: nth-child(3){
    flex-direction: row;
    button{
      margin-left: 10px;
    }
  }
  img {
    // border: 1px solid rgba(0, 0, 0, 0.5);
    box-shadow: ${LightShadow}
    width: 90%;
    height: 90%;
  }
  h4,
  p {
    margin: 0;
  }
  button {
    justify-self: start;
    align-self: end;
  }
`
