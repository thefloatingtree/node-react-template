import { combineReducers } from 'redux'
import defaultSlice from './slices/default/defaultSlice'

export default combineReducers({ 
    default: defaultSlice.reducer
})