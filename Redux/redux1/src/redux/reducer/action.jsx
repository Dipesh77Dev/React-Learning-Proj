// const changeValue = (state, action) => {}

const initialState = 10;
const initialState1 = 'Raj';

// value should not be changed bcoz reducer is a pure functn.

const changeValue = (state = initialState, action) => {
    switch(action.type) {
        case "INCREMENT" : return state + 1;
        case "DECREMENT" : return state - 1;
        case "RESET" : return state = 0;
        default : return state;
    }
}

// const getUserDemo = (state = initialState1, type, action) => {
//     if (type === action.GetUserDemo){
//         return state
//     }
// }

const getUserDemo = (state = initialState1, action) => {
    switch(action.type){
        case "GetUserDemo" : return state;
        default : return state;
    }
}

// export default changeValue;
export {changeValue, getUserDemo};
