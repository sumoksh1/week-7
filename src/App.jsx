
import React, { useState, useContext } from 'react'
import { useRecoilValue } from 'recoil'
import { useRecoilState } from 'recoil'
import { RecoilRoot } from 'recoil'
import { countAtom } from './store/atoms/count'


function App() {
  return (
    <div>
      <RecoilRoot>  
        <Count />
      </RecoilRoot>
    </div>
  )

}

function Count({  }) {
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  )
}

function CountRenderer({ }) {
  const count= useRecoilValue(countAtom);
  return (
    <div>
      Count: {count}
    </div>
  )
}

function Buttons({  }) {
  const [count, setCount] = useRecoilState(countAtom);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}

export default App

