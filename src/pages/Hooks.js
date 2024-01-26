import React from 'react'
import Counter from './Hooks/useState/Counter'
import ExampleComponent from "./Hooks/useState/Effect"
import Reducer from './Hooks/useState/Reducer'
import Callbacks from './Hooks/useState/Callbacks'
export default function Hooks() {
  return (
    <div>
        <h1>1. useState</h1>

        <Counter/>
        <ExampleComponent/>
        <Reducer/>
        <Callbacks/>
    </div>
  )
}
