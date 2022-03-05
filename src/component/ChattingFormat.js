import React from 'react'
import { Box, Button, Container, Grid, Popper, TextareaAutosize } from '@mui/material'
import Message from './Message'

export default function ChattingFormat() {
  return (
    <Container fixed>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'pink',
          width: '40%',
          height: 600,
          paddingTop: 5,
          paddingBottom: 5,
          margin: 5,
          alignItems: 'center',
        }}>
        <Box
          sx={{
            backgroundColor: 'palegoldenrod',
            width: '90%',
            height: '40%',
            marginBottom: 4,
            overflowY: 'auto',
            // padding : 2
          }}>
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: 'red',
            width: '90%',
            height: '40%',
          }}>
          <Grid container spacing={3}>
            <Grid item xs={9.5}>
              <TextareaAutosize
                maxRows={10}
                aria-label="maximum height"
                placeholder="Maximum 10 rows"
                style={{ width: '100%', height: '13%' }}
              />{' '}
            </Grid>
            <Grid item>
              <Button variant={'contained'}>전송</Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}
