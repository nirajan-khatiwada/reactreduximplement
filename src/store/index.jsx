// import { createStore } from "redux"; //old
import {configureStore } from '@reduxjs/toolkit'
import counterSliceReducer from './slice/counter'
import authSliceReducer from './slice/auth'







const store = configureStore({
    reducer:{counter:counterSliceReducer,auth:authSliceReducer}
    // reducer: counterSlice.reducer if there is only one
})


// old one
// const countReducer = (state = { count: 0, showCounter: false }, action) => {
//     switch (action.type) {
//         case 'inc':
//             return { ...state, count: state.count + 1 }
//         case 'dec':
//             return { ...state, count: state.count - 1 }
//         case 'variable':
//             return { ...state, count: state.count + action.value }
//         case 'toggle':
//             console.log(state)
//             return { ...state, showCounter: !state.showCounter }

//         default:
//             return state
//     }

// }
// const store = createStore(countReducer)

export default store