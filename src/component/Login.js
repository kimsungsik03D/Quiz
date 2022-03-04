import React from 'react'
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Link,
  Stack,
  TextField,
  Typography,
} from '@mui/material'

export default function Login() {
  return (
    <Container fixed>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        {/*<Stack>*/}
          잠금아이콘
          <Typography component={'h1'} variant={'h5'}>
            Sing in
          </Typography>
          <TextField
            name="email"
            label={'Email Address'}
            variant={'outlined'}
            required
            fullWidth
            autoComplete="email"
            autoFocus></TextField>
          <TextField
            name="pass"
            label={'Password'}
            variant={'outlined'}
            required
            fullWidth
            xd
            autoComplete="current=-password"
            type={'password'}></TextField>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label={'Remember me'}
          />
          <Button variant={'contained'} type={'submit'} sx={{ mt: 1, md: 2 }} fullWidth>
            SING IN
          </Button>
        {/*</Stack>*/}
        <Grid container xs={{ mt: 1 , md: 2 }}>
          <Grid item xs>
            <Link>Forget password?</Link>
          </Grid>
          <Grid item>
            <Link>Don`t have an account? Sing up</Link>
          </Grid>
        </Grid>
        {/*<Button variant={'outlined'} >Forget password?</Button>*/}
        {/*<Button variant={'outlined'}>Don`t have an account? Sing up</Button>*/}
      </Box>
    </Container>
  )
}
