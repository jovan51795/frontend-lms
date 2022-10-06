import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Joi from 'joi'
import { useDispatch, useSelector } from 'react-redux'
import { adminLogin } from '../redux/actions/adminAuthActions'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'

const Login = () => {
  const navigate = useNavigate()
  // useSelector((state) => {
  //   if (state.adminAuth.payload && state.adminAuth.payload.status === 1) {
  //     navigate('/dashboard')
  //   }
  // })

  const dispatch = useDispatch()
  const [loginForm, setLoginForm] = useState({
    username: '',
    password: '',
  })

  const [errors, setErrors] = useState({})

  const schema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  })

  const handleOnChange = (event) => {
    event.preventDefault()
    setLoginForm({
      ...loginForm,
      [event.currentTarget.name]: event.currentTarget.value,
    })
    const capitalizeFirstLetter = (str) => {
      const capitalized = str.charAt(0).toUpperCase() + str.slice(1)
      return capitalized
    }
    const { error } = schema
      .extract(event.currentTarget.name)
      .label(capitalizeFirstLetter(event.currentTarget.name))
      .validate(event.currentTarget.value)

    if (error) {
      setErrors({
        ...errors,
        [event.currentTarget.name]: error.details[0].message,
      })
    } else {
      delete errors[event.currentTarget.name]
      setErrors(errors)
    }
  }
  console.log(loginForm)

  const handleOnSubmit = (event) => {
    event.preventDefault()
    dispatch(adminLogin(loginForm))
  }

  const isFormInvalid = () => {
    const result = schema.validate(loginForm)
    return !!result.error
  }
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={handleOnSubmit}>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="Username"
                        name="username"
                        value={loginForm.username}
                        onChange={handleOnChange}
                        invalid={!!errors.username}
                        feedback={errors.username}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={loginForm.password}
                        onChange={handleOnChange}
                        invalid={!!errors.password}
                        feedback={errors.password}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4" disabled={isFormInvalid()}>
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5">
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>Dito mag sign-in</p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
