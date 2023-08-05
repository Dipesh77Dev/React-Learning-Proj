import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { removeUser } from '../store/slices/UserSlice'

const DisplayAllUserData = () => {
  const dispatch = useDispatch();

  const data1 = useSelector((state) => {
    return state.users;
  })
  console.log("Accessing data - ", data1);

  const deleteSelectedUser = (id) => {
    // console.log("button Delete Selected User");
    dispatch(removeUser(id))
  }


  return (
    <>
      {
        data1.map((x, id) => {
          return <li key={id}>
            {x}
            {/* <button onClick = { () => deleteSelectedUser()}>Delete</button> */}
            <button onClick={() => deleteSelectedUser(id)}>Delete</button>
          </li>
        })
      }
    </>
  )
}

export default DisplayAllUserData