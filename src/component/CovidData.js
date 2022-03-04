import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function CovidData() {

  const [user, setUser] = useState([])

  useEffect(() => {
    axios
      .get('https://api.corona-19.kr/korea/beta/?serviceKey=ihcMa9PG5VJbB8qvd3e4pgmRHZYrCoLsW')
      .then((response) => setUser(response.data))
      .catch((err) => console.log(err))
  }, [])

  delete user.API //데이터 중 API 항목떄문에 컴마가 되서 API부분 삭제

  return (
    <div>
      <table border={1}>
        <tr>
          <td>나라이름</td>
          <td>코로나19 확진자 수</td>
          <td>코로나19 완치자 수</td>
          <td>전일대비(확진)</td>
        </tr>

        {/*객체(object)형태이기때문에 아래처럼 map을 활용해서 사용.*/}

        {Object.entries(user).map(
          (data) => (
            console.log(data[1]), //data를 2개로 나뉘어서 나와서 두번째 항목만 활용하기위해 배열 선택
            (
              <tr>
                <td>{data[1].countryNm}</td>
                <td>{data[1].totalCnt.toLocaleString()}명</td>
                <td>{data[1].recCnt.toLocaleString()}명</td>
                <td>{data[1].incDec.toLocaleString()}명</td>
              </tr>
            )
          ),
        )}
      </table>
    </div>
  )
}
