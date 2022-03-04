import React, { useEffect } from 'react'
import { Box } from '@mui/material'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Menu(props) {
  const a = props; // props에서 직접 사용하게 되면 문제가 생긴다 그렇기때문에 변수에 저장해서 사용중 왜그러자?

  return (
    <div>
      <Link to={a.link}>
        <Box
          sx={{
            width: 100,
            height: 100,
            backgroundColor: 'red',
          }}>
          {a.title}
        </Box>
      </Link>
    </div>
  )
}

Menu.propsTypes = {
  // props: PropTypes.elementType.isRequired,
  props: PropTypes.node.isRequired,
}
