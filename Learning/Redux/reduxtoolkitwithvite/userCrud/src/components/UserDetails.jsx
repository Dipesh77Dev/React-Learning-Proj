import React from 'react'

import { fakeUserData } from '../api'
import { useDispatch } from 'react-redux';

import { addUser } from '../store/slices/UserSlice';
import DeleteAllUser from './DeleteAllUser'
import DisplayAllUserData from './DisplayAllUserData'

const UserDetails = () => {
  // const addNewUser = () => {}

  const dispatch = useDispatch();

  const addNewUser = (name) => {
    console.log(name);
    // dispatch({type: ...})
    dispatch(addUser(name));
  };

  return (
    <>
      <div>
        <div> List of User Details</div>
        {/* <button onClick = {() => addNewUser()}>New User</button> */}
        <button onClick={() => addNewUser(fakeUserData())}>New User</button>
      </div>

      <div>
        <DisplayAllUserData />
      </div>
      <hr />

      <div><DeleteAllUser /></div>
    </>
  )
}

export default UserDetails


/*
<div>
  <ul>
    <li>Raj</li>
    <li>Mandar</li>
    <li>Tarun</li>
  </ul>
</div> 
*/
