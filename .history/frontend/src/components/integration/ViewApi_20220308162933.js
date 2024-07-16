import React, { useEffect } from 'react'

const ViewApi = ({ data }) => {
    useEffect(() =>{
        console.log(data)
    })

  return (
      <div>
          <h2>API KEY</h2>
          <p>{ data.Api_Key }</p>
      </div>
  )
}

export default ViewApi