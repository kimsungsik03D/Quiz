import React from 'react'
import { Box, Container, Link, TextField, InputAdornment } from '@mui/material'
// import { SearchIcon } from '@mui/icons-material'
import SearchIcon from '@mui/icons-material/Search';
import googleNameImg from '../ImgSample/googlelogo_color_272x92dp.png'

const GoogleHome = () => {
  return (
    <>
      <Container fixed sx={{ b: 0, padding: '6px' }}>
        {/*navbar*/}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingBottom: '12px',
          }}>
          <Box sx={{ width: 293 }}>
            <Link href={'#'} underline={'hover'} sx={{ color: '#323336' }}>
              Google 정보
            </Link>
            <Link href={'#'} underline={'hover'} sx={{ paddingLeft: '15px', color: '#323336' }}>
              스토어
            </Link>
          </Box>
          <Box sx={{}}>
            <Link href={'#'} underline={'hover'} sx={{ paddingLeft: '15px', color: '#323336' }}>
              Gmail
            </Link>
            <Link href={'#'} underline={'hover'} sx={{ paddingLeft: '15px', color: '#323336' }}>
              이미지
            </Link>
            <Link href={'#'} underline={'hover'} sx={{ paddingLeft: '15px', color: '#323336' }}>
              아이콘
            </Link>
            <Link href={'#'} underline={'hover'} sx={{ paddingLeft: '15px', color: '#323336' }}>
              아이콘
            </Link>
          </Box>
        </Box>
        {/*navbar*/}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src={googleNameImg} style={{ width: 272, paddingBottom: '15px' }} />
          <Box sx={{ paddingBottom: '25px' }}>
            <TextField
              id="outlined-basic"
              size="3"
              label="Outlined"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <div>
            <input type={'button'} value={'Google 검색'} />
            <input type={'button'} value={"i'm Feeling Lucky"} />
          </div>
        </Box>
        <div>
          <div>대한민국</div>
          <div>
            <ui>
              <li>광고</li>
              <li>비즈니스</li>
              <li>검색의 원리</li>
              <li>개인정보처리방침</li>
              <li>약관</li>
              <li>설정</li>
            </ui>
          </div>
        </div>
      </Container>
    </>
  )
}

export default GoogleHome
