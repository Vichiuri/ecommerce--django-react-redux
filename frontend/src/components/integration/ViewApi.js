import React, { useState, useEffect } from 'react'

const ViewApi = ({ data }) => {
    const [apiKey, setApiKey] = useState('')
    const [consumerKey, setConsumerKey] = useState('')
    const [id, setId] = useState('')
    const [token, setToken] = useState('')


    useEffect(() =>{
        setApiKey(data.api_key)
        setConsumerKey(data.consumer_key)
        setToken(data.token)
        setId(data.distributor_id)
    },[data])
  
  return (
    <div className="row mt-0 justify-content-center">
        <div className="col-12 text-center">
            <div className="card-table-bordered">
                <div className="card-body pt-0 pb-5 mt-3">
                        <table className="table table-sm table-bordered table-striped" id="" style={{width:"100%"}}>
                            <tbody className=''>
                                    <tr>
                                        <th className='text-light bg-primary p-1'>Distributor ID</th>
                                        <td className='text-left p-1'>{ id }</td>
                                    </tr>
                                {/* <tr>
                                <th className='text-light bg-primary p-1'>Company ID</th>
                                <td className='text-left p-1'>None</td>
                                </tr> */}
                                <tr>
                                <th className='text-light bg-primary p-1'>Api Key</th>
                                <td className='text-left p-1'>{apiKey}</td>
                                </tr>
                                <tr>
                                <th className='text-light bg-primary p-1'>Consumer Key</th>
                                <td className='text-left p-1'>{consumerKey}</td>
                                </tr>
                                <tr>
                                <th className='text-light bg-primary p-1'>Token</th>
                                <td className='text-left p-1'>{token}</td>
                                </tr>
                            </tbody>
                        </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewApi