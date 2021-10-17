import React, { useState } from 'react'
import { TableStyle, Wrapper } from '../components/main.style'
import { useModalContext } from '../../../context/modal.context'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAdmission } from '../../../redux/Actions/AdmissionActionCreator'
import { useAuthContext } from '../../../services/auth.service'
import { ButtonStyle } from '../../../components/Button'
import SingleAdmission from '../components/SingleAdmission'
import AdmissionForm from '../components/AdmissionForm'

export default function Admission () {
  const Admission = useSelector(state => state.Admission)
  const profile = useSelector(state => state?.Profile.profile)
  const userRole = profile?.['user_role']

  const dispatch = useDispatch()

  const { token } = useAuthContext()

  React.useEffect(() => {
    dispatch(fetchAdmission(token))
  }, [])

  const { openModal, setOpenModal } = useModalContext()

  return (
    <>
      <Wrapper>
        <TableStyle>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Passport</th>
              <th>Surname</th>
              <th>Other Names</th>
              <th>Proposed Class</th>
              <th>Date of Registration</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {Admission.success &&
              Admission.admission.map((item, index) => (
                <SingleAdmission
                  key={item.id}
                  id={item.id}
                  image={item['image_url']}
                  surname={item['student_surname']}
                  otherNames={item['student_other_names']}
                  setOpenModal={setOpenModal}
                  proposedClass={item['student_proposed_class']}
                  time={item.createdAt}
                  index={index + 1}
                />
              ))}
          </tbody>
        </TableStyle>

        {userRole === 'admin' && (
          <ButtonStyle onClick={() => setOpenModal(true)}>
            Create Admission
          </ButtonStyle>
        )}
      </Wrapper>
      {openModal && <AdmissionForm />}
    </>
  )
}
