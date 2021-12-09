import React from 'react'
import * as styles from './hello-world.module.css'

type HelloWorldProps = {
  name?: string
}

export const HelloWorld: React.FC<HelloWorldProps> = ({ name }) => {
  return (
    <div>
      <h1 className={styles.heading}>
        Hello <span className={styles.name}>{name || 'World'}</span>!
      </h1>
    </div>
  )
}
