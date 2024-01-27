import React from 'react'
import Counter from './Hooks/useState/Counter'
import ExampleComponent from "./Hooks/useState/Effect"
import Reducer from './Hooks/useState/Reducer'
import Callbacks from './Hooks/useState/Callbacks'
import Ref from './Hooks/useState/Ref'
import CounterComponent from './Hooks/useState/Sec'
import Memo from './Hooks/useState/Memo'
export default function Hooks() {
  return (
    <div>
        <h1>1. useState</h1>

        <Counter/>
        <ExampleComponent/>
        <Reducer/>
        <Callbacks/>
        <Ref/>
        <CounterComponent/>
        <Memo/>
    </div>
  )
}
