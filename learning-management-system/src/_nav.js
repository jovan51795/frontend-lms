import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilSchool, cilStar, cilBook } from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavTitle,
    name: 'Main Menu',
  },
  {
    component: CNavGroup,
    name: 'Student',
    to: '',
    icon: <CIcon icon={cilSchool} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Student List',
        to: '/student/list',
      },
      {
        component: CNavItem,
        name: 'Add Student',
        to: '/student/add',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Subject',
    to: '',
    icon: <CIcon icon={cilBook} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Subject List',
        to: '/subject/list',
      },
      {
        component: CNavItem,
        name: 'Add Subject',
        to: '/subject/add',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Pages',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Login',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'Register',
        to: '/register',
      },
      {
        component: CNavItem,
        name: 'Error 404',
        to: '/404',
      },
      {
        component: CNavItem,
        name: 'Error 500',
        to: '/500',
      },
    ],
  },
]

export default _nav
