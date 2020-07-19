import { createSlice } from '@reduxjs/toolkit'

const initialState = { nice: 'nice' }

export default createSlice({ 
    name: 'default', 
    initialState,
    reducers: {
        setNice: (state, action) => {
            state.nice = action.payload
        }
    }
})