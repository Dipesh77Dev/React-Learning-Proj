// const incNumber = () => { type: 'INCREMENT'};

export const incNumber = () => {
    return {
        type: 'INCREMENT'  
    }
};

export const decNumber = () => {
    return {
        type: 'DECREMENT'  
    }
};

export const resetNumber = () => {
    return{
        type: 'RESET'
    }
}

// export const resetNumber = (value) => {
//     return{
//         type: 'RESET',
//         payload: value
//     }
// }

