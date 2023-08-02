import React from 'react'
import { useDispatch } from 'react-redux'

import { removeUsers } from '../store/slices/UserSlice'
// import { clearAllUsers } from ''

const DeleteAllUser = () => {
  const dispatch = useDispatch();

  const deleteAllUsers = () => {
    dispatch(removeUsers())
  };

  return (
    <>
      <button onClick={() => deleteAllUsers()}>Delete All Users</button>
    </>
  )
}

export default DeleteAllUser