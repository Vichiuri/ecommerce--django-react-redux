import React, { useEffect } from 'react'

const ViewApi = ({ data }) => {
    useEffect(() =>{
        console.log(data)
    })

  return (
      <div>
          <h2>API KEY</h2>
          <p>{ data.api_key }</p>
      </div>
  )
}

export default ViewApi