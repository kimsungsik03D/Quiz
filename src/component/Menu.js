import React from 'react'
import { Box } from '@mui/material'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { convertLength } from '@mui/material/styles/cssUtils'

export default function Menu(props) {
  const path= `/${props.link}`
  // console.log(path);
  // alert(path);

  console.log(props.title)
  return (
    <div>
      <Link to={path}>
      <Box
        sx={{
          width: 100,
          height: 100,
          backgroundColor: 'red',
        }}>
        {props.title}
      </Box>
      </Link>
    </div>
  )
}
Menu.propsTypes = {
  props: PropTypes.elementType.isRequired,
}
