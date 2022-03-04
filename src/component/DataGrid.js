import React from 'react'
import { Container, Table, TableCell, TableContainer, TableRow } from '@mui/material'
import Img6 from '../ImgSample/6.jpeg'
import Img7 from '../ImgSample/7.jpeg'
import Img8 from '../ImgSample/8.jpeg'
import Img9 from '../ImgSample/9.jpeg'


export default function DataGrid() {
  return (
    <Container fixed>
      <TableContainer>
        <Table>
          <TableRow>
            <TableCell>이미지</TableCell>
            <TableCell>유효기간</TableCell>
            <TableCell>사용여부</TableCell>
            <TableCell>버튼</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><img src={Img6} style={{width:"100px", hegith:"100px"}}></img></TableCell>
            <TableCell>2022.03.20</TableCell>
            <TableCell>미사용</TableCell>
            <TableCell>버튼</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><img src={Img7} style={{width:"100px", hegith:"100px"}}></img></TableCell>
            <TableCell>2022.03.20</TableCell>
            <TableCell>미사용</TableCell>
            <TableCell>버튼</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><img src={Img8} style={{width:"100px", hegith:"100px"}}></img></TableCell>
            <TableCell>2022.03.20</TableCell>
            <TableCell>미사용</TableCell>
            <TableCell>버튼</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><img src={Img9} style={{width:"100px", hegith:"100px"}}></img></TableCell>
            <TableCell>2022.03.20</TableCell>
            <TableCell>미사용</TableCell>
            <TableCell>버튼</TableCell>
          </TableRow>
        </Table>
      </TableContainer>
    </Container>
  )
}
