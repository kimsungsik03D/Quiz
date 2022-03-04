import React from 'react'
import { Box } from '@mui/material'

export default function ChattingFormat() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'pink',
        width: 800,
        height: 600,
        paddingTop: 5,
        margin: 1,
        alignItems: 'center',
      }}>
      <Box
        sx={{
          backgroundColor: 'palegoldenrod',
          width: '90%',
          height: '40%',
          marginBottom: 4,
        }}></Box>

      <Box
        sx={{
          backgroundColor: 'red',
          width: '90%',
          height: '40%',
        }}></Box>
    </Box>
  )
}
