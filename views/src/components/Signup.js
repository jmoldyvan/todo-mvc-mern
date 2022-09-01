import React from 'react';
import { useState } from 'react';

export default function Signup() {

  // tutorial has 2 states one of email and one password
    const [formData,setFormData] = useState(
      {
        email: "",
        password: '',
      }
    )

    function handleChange(event) {
      console.log(event)
      const {name, value, type,} = event.target
      setFormData(prevFormData => {
          return {
              ...prevFormData
          }
      })
  }

  // can axios take an object version of state instead of 2 seperate states

  function handleSubmit(event) {
    event.preventDefault()
    console.log(formData)
    const data={formData}
    axios.post( url, data)
}

  return (
    <form onSubmit={handleSubmit}>
        <input 
              type='email' 
              placeholder='email'
              onChange={handleChange}
              name="email"
              value={formData.email}
        />
        <input 
              type='password' 
              placeholder='password'
              onChange={handleChange}
              name="password"
              value={formData.password}
        />
        <button type='submit'>Signup</button>
    </form>
  );
}
