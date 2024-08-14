import React, { useContext } from 'react'
import { SomeContext } from '../components/ComponenteUseContext'

const About = () => {
  const { contextValue } = useContext(SomeContext)
  return (
    <div>About
      <h2>useContext</h2>
      <p>{contextValue}</p>
      <hr />
    </div>
  )
}

export default About