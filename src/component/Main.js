import React from 'react'
import { Box } from '@mui/material'
import Menu from './Menu'

const Main = () => {
  return (
    <div>
      <div>
        <h1>게임</h1>
      </div>
      <div>사용자설정</div>
      <div>
        <Menu title="솔로" link='sole'/>
        {/*<Menu title="랜덤" link='random'/>*/}
        {/*<Menu title="사용자설정" link='custom'/>*/}
      </div>
      <div>사용자이름</div>
    </div>
  )
}

export default Main

// export default function Main() {
//   return <div> ES5 안녕하세요 Main.js입니다.</div>
// }
