// import {createStore} from "redux";

// //InitialState
// const initialState = {
//     count: 0
// };


// //Reducer Function
// function counterReducer(state = initialState, action)
// {
//     switch (action.type)
//     {
//         case "INCREMENT":
//             return {count: state.count + 1};

//         case "DECREMENT":
//         return {count : state.count - 1};

//         default:
//             return state;

//     }
// }

// //Create Store
// const store = createStore(counterReducer);

// export default store;






















import {configureStore, createSlice} from '@reduxjs/toolkit';

const themeSlice = createSlice({
    name: "theme",
    initialState: { darkMode: false},
    reducers: {
        toggleTheme: (state) => { state.darkMode = !state.darkMode}
    }
});

export const { toggleTheme } = themeSlice.actions;
export const store = configureStore({ reducer: themeSlice.reducer});