import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'react-bootstrap'
import '../styles/navigation.css'
const CrumbItem = ({to, ...props}) => (
  <Link  to={to}>
    <Breadcrumb.Item className='breadcrumb-separator' {...props}>
    </Breadcrumb.Item>
  </Link>
)

export default CrumbItem