import React, { useState, useEffect } from 'react'

const ViewApi = ({ data, generateAuthToken }) => {
    const [apiKey, setApiKey] = useState('')
    const [auth, setAuth] = useState('')
    const [generate, setGenerate] = useState(false)


    useEffect(() =>{
        console.log(data)
        setAuth(data.Auth)
        setApiKey(data.Api_Key)
    })

    const handleClick = () => {
        setGenerate(true)
        generateAuthToken()
    }

  return (
      <div>
          <div>
            <p>API KEY : { apiKey }</p>
          </div>
          <div>
              <p>AUTH: { auth } </p>
          </div>
      </div>
  )
}

export default ViewApi