import React from 'react'

import { useMyHook } from 'font-metrics'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App
