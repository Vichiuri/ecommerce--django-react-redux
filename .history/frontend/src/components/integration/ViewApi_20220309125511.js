import React, { useState, useEffect } from 'react'

const ViewApi = ({ data, distId, tokenGenerated}) => {
    const [apiKey, setApiKey] = useState('')
    const [auth, setAuth] = useState('')


    useEffect(() =>{
        console.log(data)
        if(tokenGenerated === true && tokenGenerated !== null){
            setApiKey(data.api_key)
            setAuth(data.token)
        } else{
            setAuth(data.Auth)
            setApiKey(data.Api_Key)
        }
    },[data])
  
  return (
        <div className="card-body pt-0 pb-5 mt-3">

            <table className="table table-sm table-bordered table-striped" id="" style={{width:"100%"}}>
                <tbody className=''>
                    <tr>
                        <th className='text-light bg-primary p-1'>Distributor ID</th>
                        <td className='text-left p-1'>{ distId }</td>
                    </tr>
                    <tr>
                    <th className='text-light bg-primary p-1'>Company ID</th>
                    <td className='text-left p-1'>None</td>
                    </tr>
                    <tr>
                    <th className='text-light bg-primary p-1'>Api Key</th>
                    <td className='text-left p-1'>{apiKey}</td>
                    </tr>
                    <tr>
                    <th className='text-light bg-primary p-1'>Consumer Key</th>
                    <td className='text-left p-1'>{auth}</td>
                    </tr>
                </tbody>
            </table>
    </div>
    //   <div>
    //       <div>
    //         <p><span>API KEY : </span> { apiKey }</p>
    //       </div>
    //       <div>
    //           <p><span>{ tokenGenerated === true ? 'TOKEN' : 'AUTH'} : </span> { auth } </p>
    //       </div>
    //       <div>
    //           <p><span>ID : </span> { distId}</p>
    //       </div>
    //   </div>
  )
}

export default ViewApi