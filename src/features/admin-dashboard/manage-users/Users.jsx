import React from 'react'
import Heading from '../../../common/ui/Heading'
import UsersTable from './UsersTable'



function Users() {
  return (
    <div>
      <div className="row mb-4">
        <div className="col-md-9">
          <Heading title="Users" />
        </div>
        <div className="col-md-3 text-md-end">
        <button className="btn btn-green" >
          +&nbsp;Add&nbsp;New&nbsp;User
        </button>
        </div>
        
      </div>
      <div className="card px-0">
          <div className="p-3">
            <h5 className="">Users Listing</h5>
          </div>
          <UsersTable />
        </div>

    </div>
  )
}

export default Users
