import React, { useState } from 'react'
import Form from './Form'

const Create = ({ sendData }) => {
  const [isShow, setIsShow] = useState(false)
  return (
    <>
      <button onClick={() => setIsShow(!isShow)}>Create Your Character</button>
      {isShow ? <Form  reciveData={sendData}/> : ''}
    </>
  )
}

export default Create