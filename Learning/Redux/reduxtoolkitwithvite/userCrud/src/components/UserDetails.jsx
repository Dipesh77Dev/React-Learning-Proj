import React from 'react'
import DeleteAllUser from './DeleteAllUser'

const UserDetails = () => {
  return (
    <>
      <div>
        <div> List of User Details</div>
        <button>New User</button>
      </div>

      <div>
        <ul>
          <li>Raj</li>
          <li>Mandar</li>
          <li>Tarun</li>
        </ul>
      </div>
      <hr />

      <DeleteAllUser />
    </>
  )
}

export default UserDetails