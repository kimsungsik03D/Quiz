import React, { useState } from 'react'
import {
  Container,
  Box,
  Button,
  ButtonGroup,
  Grid,
  Dialog,
  DialogTitle,
  DialogContentText,
  DialogContent,
  DialogActions,
} from '@mui/material'

function Header() {
  return (
    <header>
      <h1>welcome</h1>
    </header>
  )
}

function Nav() {
  return (
    <nav>
      <oi>
        <li>1.html</li>
        <li>2.CSS</li>
      </oi>
    </nav>
  )
}
function Article() {
  const [open, setOpen] = useState(false)
  return (
    <article>
      <h2>welcome</h2>
      Hello web
      <br />
      <ButtonGroup>
        <Button
          variant={'outlined'}
          onClick={() => {
            setOpen(true)
          }}>
          Create
        </Button>
        <Button variant={'outlined'}>Update</Button>
      </ButtonGroup>
      <Button variant={'outlined'}>Delete</Button>
      <Dialog open={open}>
        <DialogTitle> Create</DialogTitle>
        <DialogContent>
          <DialogContentText> hello Create!!</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant={'outlined'}>Create</Button>
          <Button
            variant={'outlined'}
            onClick={() => {
              setOpen(false)
            }}>
            Cancle
          </Button>
        </DialogActions>
      </Dialog>
    </article>
  )
}

export default function Creatroom() {
  return (
    <Container fixed>
      <Header></Header>
      <Grid container>
        <Grid item xs={2}>
          <Nav></Nav>
        </Grid>
        <Grid item xs={10}>
          <Article></Article>
        </Grid>
      </Grid>
    </Container>
  )
}
