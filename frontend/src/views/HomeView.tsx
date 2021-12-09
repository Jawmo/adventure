import React from 'react'
import { useState } from 'react'
import { HelloWorld } from '../components/HelloWorld/HelloWorld'

export const HomeView: React.FC = () => {
  const [name, setName] = useState<string | undefined>(undefined)

  return (
    <div>
      <HelloWorld name={name} />

      <label>
        Your name:
        <input
          type='text'
          name='name'
          onChange={event => setName(event.target.value)}
        />
      </label>
    </div>
  )
}
