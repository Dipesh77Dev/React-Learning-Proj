import { createSlice } from '@reduxjs/toolkit';

// import { clearAllUsers } from '../actions';

const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addUser(state, action) {
            state.push(action.payload)
            console.log("AddUser -", action.payload)
        },
        removeUser(state, action) {
            // state.pop(action.payload)
            state.splice(action.payload, 1)
            console.log("RemoveUser" + action.payload)
        },
        removeUsers(state, action) {
            console.log("RemoveAllUser" + action.payload)
            // return state = []; -  We are not deleting here only replacing with an empty array.
            return [];
        }
    },
    // extraReducers(builder) {
    //     builder.addCase(userSlice.actions.removeUsers, () => {
    //         return [];
    //     })
    // } - which is totally depends on userSlice
});

console.log("Checking userSlice =>", userSlice);
console.log("Checking actions =>", userSlice.actions);
console.log("Checking addedUser =>", userSlice.actions.addUser());

export default userSlice.reducer;
// export { userSlice };

export const { addUser, removeUser, removeUsers } = userSlice.actions;


/*
extraReducers(builder) {
    builder.addCase(userSlice.actions.removeUsers, () => {
        return [];
    })
} - which is totally depends on userSlice if we comment userSlice so we will face an error.

extraReducers(builder) {
    builder.addCase(clearAllUsers, () => {
        return [];
    })
} 
export const { addUser, removeUser } = userSlice.actions;
which is independent so no need to pass that in reducer...
*/