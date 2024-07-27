import React from 'react'
import { useTitleColorContext } from '../hooks/useTitleColorContext'


const Page3 = () => {
  // 5- context mais complexo
  const { color, dispatch } = useTitleColorContext();

  // 6- alterando state
  const setTitleColor = (color) => {
    dispatch({ type: color })
  }
  return (
    <div>
      <h1 style={{ color: color }}>
        Page3
      </h1>
      <div>
        <button onClick={() => setTitleColor("BLUE")}>azul</button>
        <button onClick={() => setTitleColor("PURPLE")}>roxo</button>
        <button onClick={() => setTitleColor("RED")}>vermelho</button>
      </div>
    </div>
  )
}

export default Page3